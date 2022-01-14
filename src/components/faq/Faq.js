import React, {useEffect} from 'react'
import { MdOutlineLibraryBooks } from "react-icons/md";
import Question from './Question';
import { questions } from './data';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Faq = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000,
        });
      }, []);
    return (
        <section id="faq">
            <div className="container faq">
            <div className="u-title" data-aos="fade-down" >
          <MdOutlineLibraryBooks color="orangered" size={30} />
          <h2>FAQs</h2>
          <p className="u-text-small">
          This FAQ provides answers to basic questions about ChatMe.
          </p>
        </div>
        <div className="questions" data-aos="fade-up">
            {
                questions.map((question)=>(
                    <Question title={question.title} answer={question.answer} key={question.id}/>
                ))
            }
        </div>
        </div>
        </section>
    )
}

export default Faq
