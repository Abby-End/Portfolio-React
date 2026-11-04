import style from '../styles/Hero.module.css';
import Button from './Button';
import Card from './Card';


function Hero ({avatar,eyebrow,title,intro,primaryCta, secondaryCta}) {
    return(
        <section id="home" className={style.hero}>

            {/*the avatar*/}
            <div className= {style.avatar}>{avatar}</div>

            {/*the card*/}
            <div className={style.cardWrap}>
                <Card>
                    <p className={style.eyebrow}>{eyebrow}</p>
                    <h1>{title}</h1>
                    <p className={style.intro}>{intro}</p>

                    {/*the buttons*/}
                    <div className={style.actions}>
                        <Button {...primaryCta} />
                        <Button {...secondaryCta} />

                    </div>
                </Card>
                
            </div>
        </section>
    );
}

export default Hero;