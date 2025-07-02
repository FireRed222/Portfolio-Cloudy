import ContactButton from '../../components/ContactButton/ContactButton'
import s from './Contact.module.css'

const Contact = () => {
  return (
    <section className={s.contact}>
        <div className={s.container}>
            <div className={s.info}>
                <h2 className={s.ttl}>Ready to take <b className={s.bold}>your</b> digital presence to the next level?</h2>

                <p className={s.subttl}>Reach out to me today and let's discuss how I can help you achieve your goals.</p>
            </div>

            <ContactButton/>
        </div>
    </section>
  )
}

export default Contact