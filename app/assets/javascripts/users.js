$(document).ready(function(){
    Stripe.setPubishableKey($('metal[name="stripe-key"]').attr('content'));
    // watch for a form submission
    $("#form-submit-btn").click(function(event) {
        event.preventDefault();
        $('input[type=submit]').prop('disabled', true);
        var error = false;
        var ccNum = $('#card_number').val(),
            cvcNum = $('#card_year').val(),
            expMonth = $('#card_month').val(),
            expYear = $('#card_year').val();
            
        if (!error) {
            // get the Stipe token:
            Stripe.creatToken({
                number: ccNum,
                cvc: cvcNum,
                exp_month: expMonth,
                exp_year: expYear
            }, stripeResponseHandler);
        }
        return false;
    }); // form submission
    
    function stripeResponseHandler(status, response) {
        // Get a reference to the form:
        var f = $("#new_user");
        
        // Get teh token form the response:
        var token = response.id;
        
        // Add the token to the form:
        f.append('<input type="hidden" name="user[stripe_card_token]" value="' + token + '" />');
        
        //Submit the form:
        f.get(0).submit();
    }
});