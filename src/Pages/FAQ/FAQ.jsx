import Nav from "../../Components/Nav/Nav";
import "./FAQ.scss";
import Footer from "../../Components/Footer/Footer";

import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useState } from "react";
import Answers from "../../Components/Answeres/Answers";
export default function FAQ() {
  const [Answering, setAnswering] = useState("");
  return (
    <div className="FAQ col-12">
      <Nav />
      <div className="col-10 ContentFaq">
        <Answers
          question="- ما هو هدف الموقع ؟
"
          answer="   - هدف الموقع هو توفير وسيلة للجمع بين الجمعيات الخيرية والأفراد أو المطاعم والتجار الذين يرغبون في التبرع بالطعام الزائد. يهدف الموقع إلى الحد من هدر الطعام وتوجيهه للأشخاص المحتاجين.
"
        />
        <FontAwesomeIcon icon={faCaretDown} className="QuestionIcon" />
        <Answers
          question="- كيف يعمل الموقع وكيف يتم تسهيل عملية التبرع بالطعام ؟
"
          answer="   - يعمل الموقع عن طريق تسجيل المؤسسات والأفراد الراغبين في التبرع بالطعام وتحديد نوع الجهة والمنطقة التي يرغبون في تسليم الطعام إليها. يتيح الموقع للمستفيدين البحث عن الجمعيات الخيرية الموجودة في منطقتهم والتواصل معها لترتيب عملية التسليم.
"
        />
          <FontAwesomeIcon icon={faCaretDown} className="QuestionIcon" />
        <Answers
          question="- من يمكنه التبرع بالطعام من خلال الموقع ؟
"
          answer="   - يمكن للأفراد والمطاعم والتجار وأي جهة تمتلك طعامًا زائدًا التبرع من خلال الموقع. يمكن لأي شخص يملك طعامًا قابلاً للتوزيع التسجيل والمساهمة في الحد من هدر الطعام ومساعدة الأشخاص المحتاجين.
"
        />
          <FontAwesomeIcon icon={faCaretDown} className="QuestionIcon" />
        <Answers
          question="- كيف يمكن للمستفيدين العثور على الطعام المتاح ؟
"
          answer="   - يتيح الموقع للمستفيدين البحث عن الجمعيات الخيرية الموجودة في منطقتهم والتواصل معها لترتيب عملية التسليم. يمكنهم الاطلاع على الطعام المتاح والتوقيت المناسب للاستلام.
"
        />
          <FontAwesomeIcon icon={faCaretDown} className="QuestionIcon" />
        <Answers
          question="- هل أنا ملزم بدفع أي رسوم لاستخدام الموقع ؟
"
          answer="   - لا، الموقع يوفر خدماته مجانًا للأفراد والمؤسسات الراغبة في التبرع بالطعام أو الاستفادة منه.
"
        />
          <FontAwesomeIcon icon={faCaretDown} className="QuestionIcon" />
        <Answers
          question="- كيف يتم التأكد من جودة الطعام المتبرع به ؟
"
          answer="   - ينبغي على المؤسسات والأفراد المسؤولين عن التبرع بالطعام ضمان جودته وسلامته وفقًا للمعايير الغذائية المعمول بها. يمكن توفير تفاصيل إضافية حول إجراءات ضمان الجودة على الموقع.
"
        />
          <FontAwesomeIcon icon={faCaretDown} className="QuestionIcon" />
        <Answers
          question="- هل يمكنني التبرع بالأطعمة المعلبة أو الغير مجهزة ؟
"
          answer="   - نعم، يمكنك التبرع بالأطعمة المعلبة أو الغير مجهزة. يجب فقط أن تكونكن في الاعتبار أن هذه الأطعمة تكون صالحة للاستهلاك وتلبي المعايير الغذائية المطلوبة.
"
        />
          <FontAwesomeIcon icon={faCaretDown} className="QuestionIcon" />
        <Answers
          question="- ماذا يحدث إذا كان لدي طعام زائد ولكنني لا يمكنني تسليمه بنفسي ؟"
          answer="   - يمكنك التواصل مع الجمعيات الخيرية المتواجدة على الموقع لترتيب عملية استلام الطعام من موقعك. غالبًا ما يتوفرون على خدمة استلام الطعام من مكان المتبرع في حالة عدم إمكانية تسليمه بنفسك.
"
        />
          <FontAwesomeIcon icon={faCaretDown} className="QuestionIcon" />
        <Answers
          question=" هل يمكنني تحديد المنطقة التي أرغب في تسليم الطعام إليها ؟
"
          answer="    - نعم، يمكنك تحديد المنطقة التي ترغب في تسليم الطعام إليها عند تسجيلك على الموقع. ستكون الجمعيات الخيرية الموجودة في تلك المنطقة مهتمة بتلقي التبرعات الخاصة بك.
"
        />
      </div>

      <Footer />
    </div>
  );
}