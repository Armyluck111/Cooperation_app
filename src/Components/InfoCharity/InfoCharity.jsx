import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

import "./InfoCharity.scss";

export default function InfoCharity() {
  const navigate = useNavigate();
  const navigateToAllCharities = () => {
    navigate("/Services");
  };

  const navigateToVolAnyCharity = () => {
    navigate("/VolAnyCharity");
  };
  const navigateToVolWithFood = () => {
    navigate("/VolWithfood");
  };
  const { charityId } = useParams();
  const charities = [
    {
      id: 1,
      thumbnail: "/assets/Images/resala.jpg",
      title: "جمعية رسالة",
      summery:
        "جمعية رسالة هي جمعية خيرية مشهرة برقم 444 لسنة 2000 تخدم أكثر من 3 مليون محتاج سنوياً، وتساعد الفئات الأكثر احتياجًا في جميع أنحاء الجمهورية بمشاركة متطوعيها. يمكنك التبرع لكفالة يتيم أو مسن من دور أيتام أو دور مسنين رسالة، بالإضافة إلى تقديم شنط غذائية، دواء شهري، فك دين غارمين، كفالات شهرية، كفارة اليمين وكفارة الصيام، زكاة الفطر، صدقة جارية، بناء أسقف منازل للمحتاجين، عمل وصلات مياه لمنازل المحتاجين، مشاريع صغيرة للمحتاجين، إقامة مركز علاج طبيعي مجاني لذوي الاحتياجات، تجهيز عرائس، التعامل مع حالات حرجة، إجراء عمليات جراحية (مثل زراعة قوقعة، زراعة قرنية، دعمات القلب، إلخ)، توفير أدوية لأمراض حرجة (مثل روماتيدهيموفيليا، تصلب متناثر في المخ والأعصاب، فشل كلوي، إلخ)، توفير أجهزة تعويضية وأطراف صناعية للمحتاجين، والتعامل مع حالات حريق الأشخاص والمنازل.",
    },
    {
      id: 2,
      thumbnail: "/assets/Images/Soonaa.png",
      title: "مؤسسة صناع الحياة",
      summery:
        "بالطبع! مؤسسة صناع الحياة مصر (LMF) هي مؤسسة أهلية وطنية غير حكومية وغير هادفة للربح. تأسست عام 2011 ومسجلة مركزيًا برقم قيد 839 لسنة 2018. تعمل طبقًا لقانون الجمعيات والمؤسسات الأهلية المصري. المؤسسة تعمل منذ نشأتها على تنمية قدرات الشباب لبناء مجتمعات أكثر تطورًا والاستجابة لاحتياجاتهم الإنسانية والإغاثية. تقدم المؤسسة التدخلات الإنسانية والتنموية للمستفيدين الأكثر احتياجًا، مع الحفاظ على كرامتهم وضمان مشاركتهم. تتبنى مبادئ العمل الإنساني الأساسية: الإنسانية والحيادية والعمل طبقًا للاحتياج والاستقلالية، دون التمييز بناءً على العرق أو الدين أو النوع أو أي اعتبارات أخرى. صناع الحياة هي حركة تطوعية غير حكومية وغير دينية وغير حزبية وغير سياسية، تعمل منذ نشأتها عام 2004 على تحريك أفضل ما في الروح البشرية للحد من معاناة الإنسان وحماية حياته وحقوقه.",
    },
    {
      id: 3,
      thumbnail: "/assets/Images/Shfaa_Elorman.jpeg",
      title: "مستشفي شفاء الأورمان",
      summery:
        "مؤسسة شفاء الأورمان هي مستشفى مصرية غير حكومية، لا تهدف إلى الربح، ولا تخضع لضرائب على التبرعات، مقيدة برقم 5859 لسنة 2016، وتُعد أكبر مستشفى لعلاج مرضى السرطان في صعيد مصر، وتقع في مدينة الأقصر. تم وضع حجر الأساس لها في 9 ديسمبر 2014 وتحقق الحلم بخدمة الآلاف من أهالي الوجه القبلي في تقديم العلاج لهم بالمجان على أعلى مستوى طبي عالمي بأحدث أدوات التشخيص، بالإضافة إلى أحدث طرق العلاج التي يمكن مقارنتها بأفضل المستشفيات العالمية في العالم.",
    },
    {
      id: 4,
      thumbnail: "/assets/Images/misr-el-kheir_.jpg",
      title: "مؤسسة مصر الخير",
      summery:
        "مصر الخير مؤسسة تنموية غير هادفة للربح، تستقبل أموال الزكاة والصدقات؛ لتقوم بصرف أموال الزكاة في مصارفها الشرعية، وتستثمر أموال الصدقات للحصول على عائد يتم إنفاقه على المشاريع. تشارك المؤسسة في بناء الإنسان وتنميته من تعليم وصحة وتكافل اجتماعي وبحث علمي وشتى مناحي الحياة، وهدفها هو القضاء على البطالة والأمية والفقر والمرض",
    },
    {
      id: 5,
      thumbnail: "/assets/Images/mersal.png",
      title: "جمعية مرسال",
      summery:
        "مؤسسة مركزية خيرية لا تهدف إلى الربح المادي ومشهرة برقم 715 بتاريخ مارس 2015 طبقاً للقانون المصري 2002/84 الخاص بالمؤسسات الغير حكومية والذي يسمح لها العمل في كافة محافظات جمهورية مصر العربية. تهدف المؤسسة إلى خدمة الأشخاص الأكثر احتياجاً عن طريق عمل مؤسسي مستقل ومحترف.",
    },
    {
      id: 6,
      thumbnail: "/assets/Images/Magdy.png",
      title: "مؤسسة مجدي يعقوب",
      summery:
        "مؤسسة مجدي يعقوب هي مؤسسة أهلية لأمراض وأبحاث القلب، غير هادفة للربح ومسجلة لدى وزارة التضامن الاجتماعي. تأسست عام 2008. مؤسسة مجدي يعقوب توفر أحدث وأفضل الخدمات الطبية العالمية في مجال أمراض القلب مجانًا وبالكامل للفئات غير القادرة وبخاصة الأطفال، وتعمل على تدريب جيل من شباب الأطباء والممرضين والعلماء المصريين على أعلى المستويات الدولية، وتعطي أولوية لنشاط البحث العلمي للقضاء على مسببات الأمراض.",
    },
    {
      id: 7,
      thumbnail: "/assets/Images/Helal.png",
      title: "جمعية الهلال الأحمر",
      summery:
        "تعتبر جمعية الهلال الأحمر المصري من الجمعيات ذات الصفة العامة، التي لها شخصية اعتبارية طبقًا لنظامها الأساسي، وهي مشهرة بوزارة التضامن الاجتماعي برقم 13 لسنة 1967. وللجمعية رئيس يعين بقرار جمهوري لمدة ثلاث سنوات قابلة للتجديد",
    },
    {
      id: 8,
      thumbnail: "/assets/Images/Bank.jpg",
      title: "بنك الطعام المصري",
      summery:
        "نحن مؤسسة حيادية متخصصة في مكافحة الجوع عبر التنوع والابتكار في إيجاد برامج ذات فاعلية في معالجة مشكلة الجوع بصفة مستمرة في إطار مؤسسي بالتعاون مع كل من يهمه أمر من بات جائعًا على أرض مصر. في مصر 4.4% من إجمالي سكان مصر يعانون من الفقر المدقع كما بلغت نسبة الفقراء في مصر (تحت خط الفقر) 26% لأننا نؤمن بحق كل إنسان في الغذاء الكافي. بنك الطعام المصري يقوم بتوفير الطعام بصفة شهرية للغير قادر على العمل من خلال برامج الإطعام المختلفة",
    },
  ];
  const charity = charities.find((charity) => charity.id == charityId);
  if (!charity) {
    // Handle case when campaign is not found
    return <div>charity not found.</div>;
  }
  const { thumbnail, title, summery } = charity;

  return (
    <div className="col-12 InfoCharity">
      <div
        className="col-11 Charity_Header c_Header  wow animate__animated animate__backInRight animate__fast "
        style={{ marginTop: "1rem" }}
      >
        <h1 className="col-12">الجمعيات المتاحة</h1>
      </div>
      <div
        key={charity.id}
        className="col-10 campaign c_charity wow animate__animated animate__backInRight animate__fast"
      >
        <div className="col-10 col-md-5 col-lg-5">
          <h3 className="col-12">{charity.title}</h3>

          <div className="col-12 volCharityButton">
            <Button
              variant="outline-primary"
              className="volMoneyButton"
              onClick={navigateToVolAnyCharity}
            >
              تبرع بالمال
            </Button>
            <Button
              variant="outline-primary"
              className="volFoodButton"
              onClick={navigateToVolWithFood}
            >
              تبرع بالطعام
            </Button>
          </div>

          <div className="col-12 backDiv">
            <Button
              className=" col-5 BackToAllCampaigns"
              onClick={navigateToAllCharities}
            >
              العوده إلي كل الجمعيات
            </Button>
          </div>
        </div>
        <div className="col-10 col-md-5 col-lg-5">
          <img src={charity.thumbnail} className="singleCharityImage" />
        </div>
      </div>
      <div className="col-12 Summery">
        <div
          className="col-11 Charity_Header  wow animate__animated animate__backInRight animate__fast "
          style={{ marginTop: "1rem" }}
        >
          <h1 className="col-12">نبذه مختصرة</h1>
        </div>
        <div className="campaign col-10">
          <p className="col-12 summeryP  wow animate__animated animate__backInRight animate__fast">
            {charity.summery}
          </p>
        </div>
      </div>
      <div className="backIconDiv">
        <FontAwesomeIcon
          icon={faArrowLeftLong}
          className="backIcon"
          onClick={navigateToAllCharities}
        />
      </div>
    </div>
  );
}
