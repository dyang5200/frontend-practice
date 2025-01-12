const SUBMIT_URL =
    'https://www.greatfrontend.com/api/questions/contact-form';

export default function ContactForm(event) {
    event.preventDefault();
    const form = event.target;

    return (
        <form
            // Ignore the onSubmit prop, it's used by GFE to
            // intercept the form submit event to check your solution.
            onSubmit={ContactForm}>
            <input type="text" />
        </form>
    );
}
