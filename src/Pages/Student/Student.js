import "./Student.css";
import React, { useState } from "react";
import questionList from "../../Data/questions.json";             //questions.json dosyasını questionList olarak çağırdım
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { useNavigate } from "react-router-dom";

import studentList from "../../Data/students.json";               //students json dosyasına tanımladığım öğrenci listesini studenList olarak çağırdım
const Student = ({ name, setName, fetchQuestions, setCategory, category , difficulty, setDifficulty }) => {         //app.js teki değişkenleri burda kullanabilmek için aldık
 /* 
  const ogrenciler = [
    {
      ogrenciad: 'Ahmet',
      aldigiders: 'CSS',
      girdigisinav: 'Vize',
      puan: 1,
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      ogrenciad: 'Mehmet',
      aldigiders: 'React',
      girdigisinav: 'Vize',
      puan: 7,
    },
    {
      ogrenciad: 'Banu',
      aldigiders: 'HTML',
      girdigisinav: 'Final',
      puan: 5,
    },
  ];
  */
const [password,setPassword]=useState("");              //şifre tanımladık
// GİRİŞTE KULLANICI AD VE ŞİFRE GİRİLDİĞİNDE DATA NIN UZUNLUĞU DEĞİŞİYORSA SİSTEME GİRİYOR ÇÜNKÜ AŞAĞIDAKİ KOD YALNIZ KULLANICI ADI VE ŞİFRE DOĞRU GİRİLDİĞİNDE DATAYA DEĞER VERİYOR
const data = studentList.ogrenciler.filter((giris) =>             //login sistemi için burayı kullandım
    giris.isim.toLowerCase().includes(name.toLowerCase()) &&      //girilen isim ve şifreyle students.json daki isim ve şifreleri kıyaslamak için kullandığım modul
    giris.sifre.toLowerCase().includes(password.toLowerCase())
   );
//

  const [error, setError] = useState(false);
  const [error1, setError1] = useState(false);
  //const a = ["sercan", "ahmet", "mehmet"];


  //Array.from yeni array oluşturur örneğin  Array.from([1, 2, 3], x => x + x)  , [2,4,6] arrayini döndürür
  //aşağıdaki kodda da seçtiğimiz kategori ve zorlukta array döndürmeye yarıyor
  //options.concat ile array'leri birleştiriyoruz. mesela css ve vize nin birlleşimini alıyoruz
  //set herhangi bir tipte tek değer tutmamızı sağlar birden fazla var ise hepsini array'e almıyoruz
  const makeOptions = (         //key category ce difficulty opsiyonlarını çekiyor
    key //questionList'e ulaşıp oradaki kategori ve zorlukları option olarak alıyor yani multiple option kullanmamıza gerek kalmıyor
  ) =>
    questionList.results
      .reduce((options, el) => Array.from(new Set(options.concat(el[key]))), [])          //array prototipinin içinde olan reduce özelliğini kullandım. 2. değişken olan el resulttan çekılen değerler options ta oynayacağımız değişken
      .reduce(
        (options, option) =>
          options.concat({
            value: option,
            label: option,
          }),
        [{ value: "", label: `Select ${key}`, disabled: true }]             //stringin içine değişken girerken böyle kullanıyoruz stringi `` içinde tanımlayıp değeri ${} içine giriyoruz
      )
      .map(({ disabled, label, value }) => (                        //en son aldığımız değerleri maplayıp gösteriyoruz seçim olarak verdim o yüzden option
        <option key={value} value={value} disabled={disabled}>
          {label}
        </option>
      ));


  const navigate = useNavigate();

  const handleSubmit = (e) => {                         //girdiğimiz verileri yakalama
    e.preventDefault();                                 //bütün input bölümlerine ve select bölümlerini onchange(e) ile tanımladığımdan bu bölüm hepsini kapsıyor
    
    if (!category || !difficulty || !name || !password)  {        //bütün alanlar dolumu diye kontrol hepsi boşsa veya herhangi biri boşsa
      setError(true);                                       //error döner
      return;
    } else {                            //bütün alanlar doluysa bu bölüme geçer
      setError(false);                  //error false yapılır yani ilk error geçilir
      if (!(data.length>0)) {    //login kontrolü ,datanın uzunluğu 0 dan büyük değilse yani dataya veri gelmiyorsa(girilen isim ve şifrede öğrenci yoksa)
        console.log(data);          
        setError1(true);          //error1 döner
      } else {                  //girilen isim ve şifrede öğrenci varsa
        console.log(data);      //datanın uzunluğu 1 olur
        setError1(false);       //error dönmez
        if (category || difficulty) {                          //seçilen soru ve zorluk'ta soru varsa
          fetchQuestions(category, difficulty);               //fetchquestions fonksiyonu çağrılıyor girilen category ve difficulty fonksiyona aktarılıp

          navigate("/quiz");          //giriş yapılmış oluyor ve quiz sayfasına aktarılıyor
        }
      }
    }
  };

  return (
    <div className="content">
      <div className="settings">
        <span style={{ fontSize: 30 }}>Öğrenci Girişi</span>
        <div className="settings_select">
          {error && ( //error dan true dönerse burası çalışacak false dönerse burayı atlayacak
            <ErrorMessage>
              Lütfen bütün boşlukları doldurun.
            </ErrorMessage>
          )}
          {error1 && ( //error1 den true dönerse bura çalışacak false dönerse bura atlanacak
            <ErrorMessage>
              Sistemde kayıtlı bu isimde bir öğrenci bulunamadı.
            </ErrorMessage>
          )}
          <input
            className="field"
            type="text"
            placeholder="  İsminizi Giriniz :"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="field"
            type="password"
            placeholder="  Şifrenizi Giriniz : "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label className="selext-box" /*makeoptions fonksiyonuna key olarak "category" giriyoruz questionList te category olarak verilen herşeyi gösteriyor adminpanelde kendimiz girdiğimiz categoriler dahil*/>  
            Sınavını çözeceğiniz ders :
            <select
              className="select-box"
              value={category} /*value bi aşağıda olabilir */
              onChange={(e) => setCategory(e.target.value)}
            >
              {makeOptions("category")}                     
            </select >
          </label>
          <label /*makeoptions fonksiyonuna difficulty girip zorlukları çekiyoruz*/>
            Sınav Türünü Seçiniz :
            <select
              className="select-box"
              onChange={(e) => setDifficulty(e.target.value)}
              value={difficulty}
            >
              {makeOptions("difficulty")}
            </select>
          </label>
          <button className="button-2" onClick={handleSubmit}>    
            Sınava Başla
          </button>
        </div>
      </div>
      <img src="/22.svg" className="banner" alt="quiz img" />
    </div>    
  );
};

export default Student;
