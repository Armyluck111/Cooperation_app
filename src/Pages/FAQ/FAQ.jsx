import Nav from "../../Components/Nav/Nav";
import "./FAQ.scss";
import Footer from "../../Components/Footer/Footer";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Answers from "../../Components/Answeres/Answers";
import TitleAnimation from "../../Components/Loader/TitleAnimation";
export default function FAQ() {
 
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);
  if(loading){
    return<TitleAnimation/>
  }
  return (
    <div className="FAQ col-12">
      <Nav />
      <div className="col-11 Charity_Header " style={{marginTop:"5rem"}}>
          <h1 className="col-12">مؤسسة غيث</h1>
        </div>
      <div className="col-10 ContentFaq">
        
        <Answers
          question="- ما هو هدف الموقع ؟
"

          answer="   - هدف الموقع هو توفير وسيلة للجمع بين الجمعيات الخيرية والمطاعم والتجار الذين يرغبون في التبرع بالطعام الزائد. يهدف الموقع إلى الحد من هدر الطعام وتوجيهه للأشخاص المحتاجين.وايضا التبرع لأي جمعية خيرية متاحة علي الموقع بالطعام أو بالمال ويوجد بالموقع حملات تقام للمساهمة في الخير.
"
        />

        <Answers
          question="- كيف يعمل الموقع وكيف يتم تسهيل عملية التبرع بالطعام ؟
"
          answer="   - يعمل الموقع عن طريق تسجيل المطاعم الراغبة في التبرع بالطعام  وتحديد نوع الجهة والمنطقة التي يرغبون في تسليم الطعام إليها.مع امكانية التبرع بالمال لتلك الجمعيات. وايضا يمكن للمتطوعين بتقديم طلب وسوف يتم التواصل معهم في اقرب وقت .
"
        />

        <Answers
          question="- من يمكنه التبرع بالطعام من خلال الموقع ؟
"
          answer="   - يمكن للمطاعم والتجار وأي جهة تمتلك طعامًا زائدًا التبرع من خلال الموقع. "
        />

       

        <Answers
          question="- هل أنا ملزم بدفع أي رسوم لاستخدام الموقع ؟
"
          answer="   - لا، الموقع يوفر خدماته مجانً للمؤسسات الراغبة في التبرع بالطعام أو الاستفادة منه.
"
        />

        <Answers
          question="- كيف يتم التأكد من جودة الطعام المتبرع به ؟
"
          answer="   - ينبغي على المؤسسات والأفراد المسؤولين عن التبرع بالطعام ضمان جودته وسلامته وفقًا للمعايير الغذائية المعمول بها. يمكن توفير تفاصيل إضافية حول إجراءات ضمان الجودة على الموقع.
"
        />

        <Answers
          question="- هل يمكنني التبرع بالأطعمة المعلبة أو الغير مجهزة ؟
"
          answer="   - نعم، يمكنك التبرع بالأطعمة المعلبة أو الغير مجهزة. يجب فقط أن تكونكن في الاعتبار أن هذه الأطعمة تكون صالحة للاستهلاك وتلبي المعايير الغذائية المطلوبة.
"
        />

        <Answers
          question="- ماذا يحدث إذا كان لدي طعام زائد ولكنني لا يمكنني تسليمه بنفسي ؟"
          answer="   -يمكنك التواصل مع ادارة الموقع وستقوم الإدارة بكليف احد المتطوعين بالتوصيل .
"
        />

        <Answers
          question=" هل يمكنني تحديد المنطقة التي أرغب في تسليم الطعام إليها ؟
"
          answer="    - نعم، يمكنك تحديد المنطقة التي ترغب في تسليم الطعام إليها عند تسجيلك على الموقع. .
"
        />
      </div>
      <Footer />
    </div>
  );
}
