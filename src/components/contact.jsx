import { Github, Linkedin, Mail, Instagram } from "lucide-react"


export default function Contact() {
    return (
        <section id="contact" className="min-h-screen w-full flex flex-col items-center justify-center py-16 scroll-mt-24">
            <h2 className="text-4xl font-bold mb-10">Contact Me</h2>
            <div>
                <p className="text-lg text-center max-w-2xl mb-6">
                    I'm always open to new opportunities and collaborations. Whether you have a project in mind, want to discuss potential partnerships, or just want to say hi, feel free to reach out! You can contact me through the following channels:
                </p>
                <div className="flex flex-row items-center gap-4 justify-center">
                    <a href="mailto:debojyotiganguly70@gmail.com" target="_blank" className="text-lg hover:text-accent transition-colors">
                        <Mail className="inline-block mr-1" size={25} />
                    </a>
                    <a href="https://www.linkedin.com/in/debojyoti-ganguly-446274268/" target="_blank" className="text-lg hover:text-accent transition-colors">
                        <Linkedin className="inline-block mr-1" size={25} />
                    </a>
                    <a href="https://github.com/MrBlueBlobGuy" target="_blank" className="text-lg hover:text-accent transition-colors">
                        <Github className="inline-block mr-1" size={25} />
                    </a>
                    <a href="https://www.instagram.com/blue.guy.takes.photos" target="_blank" className="text-lg hover:text-accent transition-colors">
                        <Instagram className="inline-block mr-1" size={25} />
                    </a>
                </div>
            </div>
        </section>
    )
}