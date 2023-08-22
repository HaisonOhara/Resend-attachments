# Resend-attachments ☕️

# Companion Tutorial ✨

# Support Responses 📜
### I've been waiting 24 hours for my domain to be verified, why is it still pending?
When the status of your domain is "Pending" it means that Resend is still trying to verify it. Please note that it can take up to 72 hours for domain verification to be completed, if the verification fails fail  you'll receive an email from Resend.If it has been over 72 hours and your domain is still pending, you might need to delete and recreate your domain. You can see more details about emails domain here: https://resend.com/docs/dashboard/domains/introduction#understand-a-domain-status

### How do i create an email?
You can create an email through Resend using several programming languages, including Node.js, Python, Ruby, Go, Elixir, PHP, and more. Here's how you can generally do it:
- Initialize the Resend client with your <strong>RESEND_API_KEY</strong>.
- Use the send function of the emails service with the appropriate parameters: from, to, subject & html.

 Here's an example using Node.js:

![Screenshot from 2023-08-22 10-27-01](https://github.com/HaisonOhara/Resend-attachments/assets/39864254/4b304d75-5bdf-4cac-9700-066df5f4ad9a)


You can also set a '<strong>reply_to address</strong>' if you want to direct any responses to a different location.
Remember to replace '<strong>'your_resend_api_key</strong>' with your actual Resend API key.
You can check more examples here: https://resend.com/docs/introduction#quickstart


### I  need to be able to receive emails from Resend. How do I do that?
Currently, the feature to receive emails directly within Resend is not available . However, there are some useful workarounds that allow you to manage replies and responses. You can set a reply_to address while sending an email that should receive any responses. This could be an existing inbox or even a Slack channel.
For example, if you want the responses to be directed to your personal email address, you can set that email as your reply_to address. Consequently, if a recipient replies to your email, it will be sent to the designated reply_to address .
Additionally, if you would like to receive responses in a Slack channel, you can set the reply_to as the email address of that Slack channel. 

You can check here fore more details: https://resend.com/docs/api-reference/emails/send-email
