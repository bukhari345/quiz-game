import React from "react";
import styles from "./home.module.css";
import img1 from "../../assets/img1.jpeg";
import img2 from "../../assets/img2.jpeg";
import img3 from "../../assets/img3.svg";
import img4 from "../../assets/img4.svg";
import img5 from "../../assets/img5.svg";
import { useSelector } from "react-redux";

function Home() {
  const isLanguageEnglish = useSelector((state) => state.language.isEnglish);

  return (
    <main className={styles.page}>
      <section className={styles["page-section"]}>

        <section className={styles["second-section"]}>
          <div className={styles["section-background"]}></div>
         
         
          <div className={styles.info} style={{backgroundColor:'#fd3f81',textAlign:'center',color:'white'}}>
            <div className={styles["info-body"]} >
              <h2 style={{color:'white'}}>
                {isLanguageEnglish ? "Welcome to E-Learning Gamification Engine" : "Quizzly w domu"}
              </h2>
              <p style={{color:'white'}}>
                {isLanguageEnglish
                  ? "Learning Apps and games for family fun or home study."
                  : "Gry edukacyjne do rodzinnej zabawy lub nauki w domu."}
              </p>
              <a href="/" className={styles["info-link"]}>
                {isLanguageEnglish ? "Learn more" : "Dowiedz się więcej"} &gt;
              </a>
            </div>
          </div>
        </section>

        <section className={styles["first-section"]} >
          <div className={styles.banner} style={{backgroundColor:'#fd3f81'}}>
            <img src='https://img.freepik.com/free-vector/boy-reading-books-stack-books_1308-97617.jpg?w=740&t=st=1718198741~exp=1718199341~hmac=b3a427fc3160266953c983e82a734ee895bf3fc3471fb562d5444780d458db52' alt="" className={styles["banner-image"]} />
            <div className={styles["banner-body"]}>
              <h2 className={styles["banner-title"]}>
                {isLanguageEnglish
                  ? "Make learning awesome"
                  : "Spraw, aby nauka stała się niesamowita"}
              </h2>
              <p style={{color:'white'}}>
                {isLanguageEnglish
                  ? "E-Learning delivers engaging learning to billions"
                  : "Quizzly zapewnia angażującą naukę milionom użytkowników"}
              </p>
              <button className={styles["banner-button"]}>
                <a href="/auth">
                  {isLanguageEnglish
                    ? "Sign up for free"
                    : "Zarejestruj się za darmo"}
                </a>
              </button>
            </div>
          </div>
          <div className={styles.banner} style={{backgroundColor:'#fd3f81'}}>
            <div className={styles["banner-body"]}>
              <h2 className={styles["banner-title"]}>
                {isLanguageEnglish ? "Explore content" : "Przeglądaj treść"}
              </h2>
              <p style={{color:'white'}}>
                {isLanguageEnglish
                  ? "Explore content and join one of the world’s largest educator communities."
                  : "Przeglądaj treści i dołącz do jednej z największych na świecie społeczności nauczycieli"}
              </p>
              <button className={styles["banner-button"]}>
                <a href="/">
                  {isLanguageEnglish
                    ? "Check public quizzes"
                    : "Sprawdź publiczne quizy"}
                </a>
              </button>
            </div>
            <img src='https://img.freepik.com/free-vector/boy-read-books-white-background_1308-93445.jpg?w=740&t=st=1718198800~exp=1718199400~hmac=908005b729f80a52a24558fc843b331c4c94447dd272e51770e4ee09e9d447e5' alt="" className={styles["banner-image"]} />
          </div>
        </section>

        <section className={styles["third-section"]} >
          <h1>
            {isLanguageEnglish
              ? "How does Gamification Engine works?"
              : "Jak działa aplikacja?"}
          </h1>
          <div className={styles["card-container"]}>
            <div className={styles.card} style={{backgroundColor:'#fd3f81'}}>
              <img src='https://img.freepik.com/free-vector/character-playing-videogame_23-2148522529.jpg?t=st=1718199209~exp=1718202809~hmac=d6285d339cd1f34bd0d2651f640e54ab4052f28b19de2958fc2189508aeccace&w=996' alt="" className={styles["card-image"]} />
              <div className={styles["card-body"]} style={{color:'white'}}>
                <h1 style={{color:'white'}}>{isLanguageEnglish ? "Play" : "Graj"}</h1>
                <p style={{color:'white'}}>
                  {isLanguageEnglish
                    ? "Game on! Join a Game with a PIN provided by the host and answer questions on your device."
                    : "Graj dalej! Dołącz do kahoot za pomocą kodu PIN dostarczonego przez gospodarza i odpowiadać na pytania na swoim urządzeniu."}
                </p>
              </div>
            </div>
            <div className={styles.card} style={{backgroundColor:'#fd3f81'}}>
              <img src='https://img.freepik.com/free-vector/kid-playing-ipad-with-speech-bubble_1308-94742.jpg?t=st=1718199376~exp=1718202976~hmac=4ad09c1be20e940d6d6b704bf2efc08d0feda9063dbb177472195f6957c1ea43&w=740' alt="" className={styles["card-image"]} />
              <div className={styles["card-body"]}>
                <h1 style={{color:'white'}}>{isLanguageEnglish ? "Create" : "Twórz"}</h1>
                <p style={{color:'white'}}>
                  {isLanguageEnglish
                    ? "It only takes minutes to create a learning game or trivia quiz on any topic, in any language."
                    : "Stworzenie quizu na dowolny temat, w dowolnym języku zajmuje tylko kilka minut."}
                </p>
              </div>
            </div>
            <div className={styles.card} style={{backgroundColor:'#fd3f81'}}>
              <img src='https://img.freepik.com/free-vector/flat-people-asking-questions-illustration_23-2148902482.jpg?t=st=1718199455~exp=1718203055~hmac=70621fc989b75addb23b3cc236c5c3f89a95c8798bed4660b1912bb5200af58d&w=900' alt="" className={styles["card-image"]} />
              <div className={styles["card-body"]}>
                <h1 style={{color:'white'}}>
                  {isLanguageEnglish
                    ? "Host or share"
                    : "Hostuj albo udostępnij"}
                </h1>
                <p style={{color:'white'}}>
                  {isLanguageEnglish
                    ? "Host a live game with questions on a big screen or share a game with remote players."
                    : "Przeprowadź grę na żywo z pytaniami na dużym ekranie lub udostępnij gra ze zdalnymi graczami."}
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>

    </main>
  );
}

export default Home;
