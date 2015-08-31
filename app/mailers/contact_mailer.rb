class ContactMailer < ActionMailer::Base
    default to: "joejamesb@gmail.com"

    def contact_email(name, email, body)
        @name = name
        @email = email
        @body = body
        
        mail(from: email, subject: 'contact form Message')
    end
    
    
end
