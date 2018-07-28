import React, { Component } from "react";
import { Link } from "react-router-dom";
import photo from "../img/nr_3.png";

export default class Post extends Component {
  render() {
    const post = {
      avatar: photo,
      name: "Normunds Rozensteins",
      text:
        "Ik brīdi redzu jaunus nācējus uz klubu, un skatos kā tiek pieļautas vecum vecās kļūdas -  Nepacietība un Steigšanās - tās taču neatmaksājas Šeit būs daži padomi, lai jūs nodrošinātos pret visbiežāko kļūdu, ko izraisa steiga, kad jau pēc pāris nedēļām ir iekrājies nogurums, sāp visas maliņas, izpaliek enerģijas pieplūdums, un nodarbības tiek pamestas. Tātad pirmais padoms ir, – lūdzu nesteidzieties! Nesteidzieties ar nodarbību skaitu nedēļā, nesteidzieties ar nodarbību intensitāti.Noteikti nav vēlams sākt sportošanu ar ikdienas treniņu apmeklēšanu. Pietiks ar diviem stundu, pusotru gariem treniņiem nedēļā.Sekojiet pašsajūtai un ievērot, lai izvēlēto nodarbību slodze nav par augstu, bet ir tāda, kas uzlabo pašsajūtu jau uzreiz - pēc treniņa.Neklausiet ieteikumiem darboties līdz spēku izsīkumam. Uzsācējam (jebkurā vecumā) slodzēm treniņos ir jābūt samērīgām - tādām, lai darbaspēju pieaugums būtu jūtams ikkatru nākamo treniņu.Pirmos pāris mēnešus jūsu varēšanai vajadzētu augt lineāri.Ievērojiet, ja sajūta treniņā ir būtiski „ švakāka”, kā iepriekšējo reizi – tas nozīmē, ka vajadzīga papildus atpūta. Tieši atpūtas dienu laikā norit anatomiskas izmaiņas muskulatūrā, sirdī, elpošanas orgānu sistēmā, asinīs, asinsvadu sistēmā un citur, kuras atšķir trenētu cilvēku no netrenēta.Jūs pamazām pārtopat, un tas nenotiek treniņos, bet atpūtas dienās.Mēriet sev pulsu no rīta gultā pēc pamošanās. Jau pēc pāris nedēļu regulārām nodarbībām, tam vajadzētu būt mazliet lēnākam, kas nozīmēs, ka sirds nostiprinās un trenētība pieaug.Sākt apmeklēt nodarbības trīs reizes nedēļā iesaku tikai tad, kad jau spējat pilnībā atjaunot spēkus dienā starp treniņiem, drīzāk jau kādā trešajā mēnesī kopš nodarbību sākšanas. Un arī tad, trenējoties trīs reizes nedēļa, iesaku katru trešo vai ceturto nedēļu dot sev atslodzi.Tikai pamazām, ar laiku, daļai no mums izdodas iekļaut treniņus ikdienā, un iegūt enerģijas avotu, brīnišķīgo atkarību no treniņiem, kas dzīves kvalitāti paceļ jaunā līmenī – pieaug darbaspējas, māka organizēt savu laiku, ceļas pašapziņa un tā joprojām. Ieguvumu sarakstu no regulārām fiziskām nodarbībām nav iespējams noslēgt, bet tāpat kā visu ceļojumu sākums ir pirmais solis – speriet to – dodaties pastaigā, skrējienā vai uz sporta zāli, un lai jūsu apņemšanās - uzsākt regulāri sportot piepildās!",
      _id: 1,
      likes: [1, 2]
    };
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3" />
          <div className="col-md-6">
            <div className="card card-body mb-3">
              <div className="row">
                <div className="col-md-2">
                  <a href="profile.html">
                    <img
                      className="rounded-circle d-none d-md-block"
                      src={post.avatar}
                      alt=""
                    />
                  </a>
                  <br />
                  <p className="text-center">{post.name}</p>
                </div>
                <div className="col-md-10">
                  <p className="lead ">{post.text}</p>

                  <span>
                    <button type="button" className="btn btn-light mr-1">
                      <i className="fas fa-thumbs-up" />
                      <span className="badge badge-light">
                        {post.likes.length}
                      </span>
                    </button>

                    <Link
                      to={`/post/${post._id}`}
                      className="btn btn-info mr-1"
                    >
                      Comments
                    </Link>

                    <button type="button" className="btn btn-danger mr-1">
                      <i className="fas fa-times" />
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3" />
        </div>
      </div>
    );
  }
}
