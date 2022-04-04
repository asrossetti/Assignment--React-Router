import NavBar from "../Components/NavBar";

export default function Contact() {
    return (
        <div>
            <NavBar />
            <main class="contactMain">
            </main>

            <aside>
                <form>
                    <input name="name" placeholder="What is your name?" class="name" required />
                    <input name="emailaddress" placeholder="What is your email?" class="email" type="email" required />
                    <textarea rows="4" cols="50" name="subject" placeholder="Please enter your message" class="message" required></textarea>
                    <input name="submit" class="btn" type="submit" value="Send" />
                </form>

            </aside>

        </div>
    );
}