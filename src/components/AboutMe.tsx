import React, { useState } from 'react';

export default function AboutMe() {
    // State for managing the visibility of each section
    const [isChildhoodOpen, setIsChildhoodOpen] = useState(false);
    const [isFamilyOpen, setIsFamilyOpen] = useState(false);
    const [isEducationOpen, setIsEducationOpen] = useState(false);
    const [isMayorOpen, setIsMayorOpen] = useState(false);
    const [isChildhoodExperienceOpen, setisChildhoodExperienceOpen] = useState(false);
    const [isMyChildrenOpen, setisMyChildrenOpen] = useState(false);
    const [isPartnershipOpen, setisPartnershipOpen] = useState(false);
    const [isProfessionOpen, setisProfessionOpen] = useState(false);
    const [isPoliticalCareerOpen, setisPoliticalCareerOpen] = useState(false);

    return (
        <section className="py-24 bg-gray-50" style={{ position: 'relative' }}>
            <div id="about" className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-primary mb-5">
                    Über mich
                </h2>
                <div className="text-center">
                    <p className="text-gray-600">
                        Ich freue mich, dass Sie und Ihr mich als Mensch und Bürgermeister kennenlernen wollen.
                    </p>
                    <p className="text-gray-600 flex-1">
                        Ich freue mich auf Ihren und Euren persönlichen Kontakt.
                    </p>
                    <p className="text-gray-600 flex-1">
                        Herzlichst
                        Tobias Scherf
                    </p>
                </div>
                <br></br>

                <div className="space-y-12">
                    {/* Kindheit und Jugend */}
                    <div className="glass rounded-xl p-8">
                        <h3 className="text-2xl font-semibold text-primary mb-4 cursor-pointer" onClick={(event) => {
                            event.preventDefault();
                            setIsChildhoodOpen(!isChildhoodOpen);
                        }}>
                            Kindheit und Jugend
                            <span className="ml-2 transition-transform transform" style={{ display: 'inline-block', transform: isChildhoodOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                                &#9660;
                            </span>
                        </h3>
                        {isChildhoodOpen && (
                            <div className="overflow-hidden transition-max-height duration-300" style={{ maxHeight: isChildhoodOpen ? 'none' : '0' }}>
                                <blockquote className="italic text-gray-600 border-l-4 border-primary pl-4 my-4">
                                    "Zwei Dinge hatten wir, die unsere Kindheit zu dem machten, wie sie war – Geborgenheit und Freiheit"
                                    <footer className="text-sm mt-2">- Astrid Lindgren</footer>
                                </blockquote>

                                <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-4">
                                    <p className="text-gray-600 flex-1">
                                        Groß geworden bin ich auf dem Bauernhof meiner Eltern zwischen Welda und Volkmarsen. Harte Arbeit prägte die Familie und den gesamten Alltag. Die Arbeit um das tägliche Brot prägte unseren Alltag und den dieser Generation.  Morgens und abends Kühe melken, Schweine versorgen, Felder bestellen, Haus, Hof, Garten und Kindern betreuen, Runkeln und Zuckerrüben hacken, ernten, verladen, Urlaub war ein Fremdwort.
                                        Großwerden auf einem Bauernhof heißt einerseits Verzicht üben und mitarbeiten, gleichzeitig waren die Früchte unseres Tuns greifbar und unmittelbar.  Trotz oder gerade deswegen habe ich meine Kindheit genossen.
                                    </p>
                                    <br></br>
                                    <img
                                        src="/gallery_images/Bauernhof.png"
                                        alt="Bauernhof"
                                        className="w-full md:w-1/4 rounded-xl block mx-auto"
                                    />
                                </div>
                                <br></br>
                                <div className="space-y-4">
                                    <h4 className="text-xl font-medium text-primary cursor-pointer mb-2" onClick={(event) => {
                                        event.preventDefault();
                                        setisChildhoodExperienceOpen(!isChildhoodExperienceOpen);
                                    }}>
                                        Prägendes Kindheitserlebnis
                                        <span className="ml-2 transition-transform transform" style={{ display: 'inline-block', transform: isChildhoodExperienceOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                                            &#9660;
                                        </span>
                                    </h4>
                                    {isChildhoodExperienceOpen && (
                                        <div className="overflow-hidden transition-max-height duration-300" style={{ maxHeight: isChildhoodExperienceOpen ? 'none' : '0' }}>
                                            <blockquote className="italic text-gray-600 border-l-4 border-primary pl-4 my-4">
                                                "Auch aus Steinen, die einem in den Weg gelegt werden, kann man Schönes bauen."
                                                <footer className="text-sm mt-2">- Johann Wolfgang von Goethe</footer>
                                            </blockquote>
                                            <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
                                                <div className="flex flex-col space-y-4">
                                                    <p className="text-gray-600">
                                                        Ein prägendes Erlebnis meiner Kindheit war mein schwerer Unfall mit zwölf Jahren in Bad Arolsen, bei dem ich von einem LKW überrollt wurde. Ich erlitt schwerste Verletzungen, galt als klinisch tot wurde doch zurück ins Leben geholt und kämpfte mich letztlich selbst ins Leben zurück. Dank einer guten medizinischen Versorgung in Marburg, liebevoller Eltern und Verwandten und meinem eigenen starken Willen zum Leben, blicke ich heute dankbar auf diese Zeit zurück.
                                                    </p>
                                                    <p className="text-gray-600">
                                                        Wie kostbar und wertvoll das Leben ist, weiß ich seit meinem Unfall sehr zu schätzen, weiterhin habe ich gelernt, dass jeder der hinfällt auch wieder aufstehen und sich dem Kampf des Lebens stellen darf. Dabei ist jeder seines Glückes Schmied und ich schmiede gerne an meinem Glück und am Glück anderer. Nie aufgeben und immer optimistisch ins Leben blicken. Diese Eigenschaften habe ich durch meinen Unfall verinnerlicht und sie helfen mir auch heute noch, Rückschläge, meinen Job und mein Leben zu meistern.
                                                    </p>
                                                </div>
                                                <br></br>
                                                <img
                                                    src=" /gallery_images/IMG_0382.jpg"
                                                    alt="Tobias schlafend"
                                                    className="w-full md:w-1/4 rounded-xl md:ml-4"
                                                />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Familie */}
                    <div className="glass rounded-xl p-8">
                        <h3 className="text-2xl font-semibold text-primary mb-4 cursor-pointer" onClick={(event) => {
                            event.preventDefault();
                            setIsFamilyOpen(!isFamilyOpen);
                        }}>
                            Familie
                            <span className="ml-2 transition-transform transform" style={{ display: 'inline-block', transform: isFamilyOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                                &#9660;
                            </span>
                        </h3>
                        {isFamilyOpen && (
                            <div className="overflow-hidden transition-max-height duration-300" style={{ maxHeight: isFamilyOpen ? 'none' : '0' }}>
                                <blockquote className="italic text-gray-600 border-l-4 border-primary pl-4 my-4">
                                    "Eine Familie zu sein bedeutet, dass du Teil von etwas sehr Wunderbarem bist. Es bedeutet, dass du für den Rest deines Lebens lieben wirst und geliebt wirst."
                                    <footer className="text-sm mt-2">- Lisa Weed</footer>
                                </blockquote>
                                <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
                                    <div className="flex flex-col space-y-4">
                                        <p className="text-gray-600">
                                            Ich bin ein Familienmensch. Meine vier Kinder wurden im ersten Jahrzehnt dieses Jahrhunderts geboren und sind nun 15, 18, 22 und 25 Jahre alt. Welch ein Glück, Kinder zu haben und diese auf ihrem Lebensweg begleiten zu können. Einfach für sie da zu sein.
                                            Das war und ist mir auch bei meiner Tätigkeit als Bürgermeister immer wichtig. Kinder – egal welchen Alters – brauchen Begleitung, Unterstützung, Wärme und Nähe – auch wenn die Eltern getrennt sind oder gerade dann. Eine große Unterstützung ist dabei meine Mutter, Oma Renate, die sich liebevoll um ihre Enkelkinder kümmert, mich entlastet und das Herz der Familie ist.
                                        </p>
                                        <p className="text-gray-600">
                                            Die Rolle als Vater habe ich die Rolle für meine Kids immer gerne wahrgenommen. Nicht selten eile ich zwischen zwei Warburger Terminen, um die Jüngste zum Handball zu bringen oder die Zweitjüngste bei Auftritten der Volkmarser Prinzengarde zu begleiten. Es ist wunderbar, die Kinder wachsen zu sehen, in ihren Höhen und Tiefen für sie dazu sein, sie zu unterstützen, so dass sie ihren eigenen Weg gehen.
                                        </p>
                                        <p className="text-gray-600">
                                            Ja, Kinder und Bürgermeisteramt sind unter einen Hut zu bekommen, wenn man kraftvoll und willensstark ist und man nicht zögert, sondern sich engagiert. Gerade in Corona-Zeiten war dies eine Herausforderung. Auch meine Kinder waren unterschiedlich stark betroffen und hatten Herausforderungen zu meistern. Dank meiner reichen Erfahrungen als Familienvater ist es eines meiner Herzensanliegen, städtische Aufgaben im Bereich Eltern, Kindern und Familien kraftvoll voranzubringen.
                                        </p>
                                    </div>
                                    <br></br>
                                    <img
                                        src=" /gallery_images/Scherf-56.jpg"
                                        alt="Familie"
                                        className="w-full md:w-1/4 rounded-xl md:ml-4"
                                    />
                                </div>
                                <div className="space-y-6">
                                    <div>
                                        <br></br>
                                        <h4 className="text-xl font-medium text-primary cursor-pointer mb-2" onClick={(event) => {
                                            event.preventDefault();
                                            setisMyChildrenOpen(!isMyChildrenOpen);
                                        }}>
                                            Meine Kinder
                                            <span className="ml-2 transition-transform transform" style={{ display: 'inline-block', transform: isMyChildrenOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                                                &#9660;
                                            </span>
                                        </h4>
                                        {isMyChildrenOpen && (
                                            <div className="overflow-hidden transition-max-height duration-300" style={{ maxHeight: isMyChildrenOpen ? 'none' : '0' }}>
                                                <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-4">
                                                    <p className="text-gray-600">
                                                        Mein Sohn Kevin studiert Elektrotechnik in Gießen und strahlt Ruhe und Gelassenheit aus. Er genießt das Leben, hat seine Ziele klar im Blick, engagiert sich als Fußballschiedsrichter in der Region und ist  politisch aktiv. Als gelernter Elektroniker für Geräte und Systemtechnik kann er sich heute sein Studium mitfinanzieren. Er unterstützt mich und sagt: „Mein Vater übt das Amt mit Freude und Engagement aus. Das ist gut für Warburg.“
                                                    </p>
                                                    <br></br>
                                                    <img
                                                        src=" /gallery_images/IMG_8281.jpg"
                                                        alt="Kevin"
                                                        className="w-full md:w-1/4 rounded-xl md:ml-4 order-last"
                                                    />
                                                </div>
                                                <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-4">
                                                    <img
                                                        src=" /gallery_images/IMG_9195.jpg"
                                                        alt="Roxana"
                                                        className="w-full md:w-1/4 rounded-xl md:ml-4 order-last md:order-first"
                                                    />
                                                    <br></br>
                                                    <p className="text-gray-600">
                                                        Meine älteste Tochter Roxana liebt das Leben, unterstützt die Geschwister, hat einen klaren Blick und engagiert sich in vielen Bereichen. Sie tanzte gerne in der Prinzengarde und absolvierte ein Freiwilliges Soziales Jahr in der Karl-Preising-Schule in Bad Arolsen. An dieser inklusiven Schule mit lernschwachen und beeinträchtigten Kindern entdeckte sie ihre  Freude am Lehren . Heute studiert sie in Gießen Lehramt für Sonderpädagogik mit dem Hauptfach Mathematik. Zudem arbeitet sie hier bei uns im Jugenddorf in der Gruppenbetreuung und kann sich so ihr Studium mitfinanzieren. „Mein Vater hat sich immer Zeit für uns Kinder genommen trotz seines ehrenamtlichen Engagements und auch als Bürgermeister. Familie ist ihm sehr wichtig“, meint Roxana.
                                                    </p>
                                                    <br></br>
                                                </div>
                                                <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-4">
                                                    <br></br>
                                                    <p className="text-gray-600">
                                                        Riana hat den guten Blick für die Familie und ist die Kümmerin. Willensstärke zeichnet sie aus, sie kocht und backt gerne und schaut, dass es ihren Omas gutgeht.  Das Lesen von englischsprachigen Büchern ist ihr großes Hobby. Seit früher Kindheit tanzt sie in der Prinzengarde und ist Gardemädchen in der Großen Garde der Volkmarser Karnevalsgesellschaft.  Riana schließt dieses Jahr ihr Fachabitur mit Schwerpunkt Sozialwesen ab und möchte daran ein Freiwilliges Soziales Jahr (FSJ) anschließen. Sie ist großer Taylor Swift Fan und fand es toll, dass ich als Vater sie auf einem Konzert begleitet habe. Für Riana ist wichtig: „Damit mein Vater bei seinen vielen Terminen nichts vergisst, erinnere ich ihn manchmal daran, was bei uns so ansteht. Dann hat er die Familie und meine Oma gut im Blick und alle sind gut versorgt.“
                                                    </p>
                                                    <br></br>
                                                    <img
                                                        src=" /gallery_images/IMG_8985.jpg"
                                                        alt="Riana"
                                                        className="w-full md:w-1/4 rounded-xl md:ml-4 md:order-last"
                                                    />
                                                </div>
                                                <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-4">
                                                    <img
                                                        src=" /gallery_images/IMG_6287.jpg"
                                                        alt="Lysandra"
                                                        className="w-full md:w-1/4 rounded-xl md:ml-4 order-last md:order-first"
                                                    />
                                                    <br></br>
                                                    <p className="text-gray-600">
                                                        Lysandra hat als jüngste Kind gelernt, sich durchzusetzen. Sie probiert tausend Dinge aus, ist voller Leben und Fröhlichkeit. Sie fragt nicht, sondern macht einfach. Probieren geht bei ihr über studieren. Sie liebt Fußballspiele und Konzerte und spielt selbst Handball in der B-Jugend des TV Külte. Da ist sie Torwart und hat keine Angst vor dem Ball. Wer hinfällt, muss auch wieder aufstehen, ist ihr Motto. Familie, Freunde, Feiern sind ihr sehr wichtig. Zudem ist sie ehrgeizig und engagiert sich  in der Schule, etwa als Präfektin oder Klassensprecherin. In diesem Jahr wird sie einen einjährigen Highschool Aufenthalt in den USA absolvieren. Wow, was hat das Kind für einen Mut. Sie meint: „Schade, dass ich bei der Wahl von Papa nicht in Deutschland bin, ich unterstütze ihn so gerne. Einfach klasse, was er so alles für Jugendliche in Warburg macht.“
                                                    </p>
                                                    <br></br>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    <div>
                                        <br></br>
                                        <h4 className="text-xl font-medium text-primary cursor-pointer mb-2" onClick={(event) => {
                                            event.preventDefault();
                                            setisPartnershipOpen(!isPartnershipOpen);
                                        }}>
                                            Partnerschaft
                                            <span className="ml-2 transition-transform transform" style={{ display: 'inline-block', transform: isPartnershipOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                                                &#9660;
                                            </span>
                                        </h4>
                                        {isPartnershipOpen && (
                                            <div className="overflow-hidden transition-max-height duration-300" style={{ maxHeight: isPartnershipOpen ? 'none' : '0' }}>
                                                <blockquote className="italic text-gray-600 border-l-4 border-primary pl-4 my-4">
                                                    "Glücklich allein ist die Seele, die liebt.“ "
                                                    <footer className="text-sm mt-2">- Johann Wolfgang von Goethe</footer>
                                                </blockquote>
                                                <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
                                                    <div className="flex flex-col space-y-4">
                                                        <p className="text-gray-600">
                                                            Seit über drei Jahren ist Kathrin die Partnerin an meiner Seite. Kennengelernt dank meines Besuchs auf einem Seminar des Standesamtes in Bad Salzschlirf. Haben wir – der Bürgermeister und die die engagierte Diplom-Psychologin – uns gefunden und uns lieben gelernt. Geleitet durch gegenseitigen Respekt und Achtung wächst unsere Liebe und Partnerschaft.
                                                        </p>
                                                        <p className="text-gray-600">
                                                            Es ist nicht immer, einfach einen Bürgermeister als Partner zu haben, sind doch auch die Wochenenden geprägt von Termin und Aufgaben, da ich ja 24/7 im Amt bin. Zeitlichen Freiraum geben zu können und dennoch Zeit miteinander genießen zu dürfen, macht unsere Partnerschaft sicherlich aus. Daher freue ich mich immer sehr, wenn Kathrin die Zeit findet, mich bei Terminen zu begleiten und wir unser Interesse an den Menschen im Warburg Land gemeinsam zeigen können.
                                                        </p>
                                                        <p className="text-gray-600">
                                                            Wandern ist unsere große Leidenschaft. die wir oft auch gemeinsam genießen können. Wir sind beide von Kunst, Kultur und Konzerten begeistert und genießen unsere Hobbies gerne gemeinsam. Reisen rundet unsere Liebe zur Welt und den Menschen ab und so versuchen wir – trotz meiner terminlichen Verpflichtungen - auch Auszeiten gemeinsam oder mit den Kindern, die wir beide in die Partnerschaft einbringen, zu verbringen.
                                                        </p>
                                                        <p className="text-gray-600">
                                                            Für Kathrin ist wichtig, dass wir eine Beziehung leben, in der Gleichberechtigung, Entwicklungsräume und gegenseitiger Verantwortung großgeschrieben sind.
                                                        </p>
                                                        <p className="text-gray-600">
                                                            „Tobias ist ein Mann, der Frauen nicht diskriminiert und kleinhält und deren Notwendigkeiten im Blick hat. In Warburg setzt er sich für Gleichberechtigung in Verwaltung und Rat ein und versteht, wie wichtig gut ausgestattete Kindergärten, Schulen, Vereine und kulturelle Angebote für das Wohl aller Einwohner ist,“ so Kathrin.
                                                        </p>
                                                    </div>
                                                    <br></br>
                                                    <img
                                                        src="/gallery_images/e9c6079f-ce5e-40b3-9b79-386228d52fdd.JPG"
                                                        alt="Kathrin"
                                                        className="w-full md:w-1/4 rounded-xl md:ml-4"
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Ausbildung und beruflicher Werdegang */}
                    <div className="glass rounded-xl p-8">
                        <h3 className="text-2xl font-semibold text-primary mb-4 cursor-pointer" onClick={(event) => {
                            event.preventDefault();
                            setIsEducationOpen(!isEducationOpen);
                        }}>
                            Ausbildung und beruflicher Werdegang
                            <span className="ml-2 transition-transform transform" style={{ display: 'inline-block', transform: isEducationOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                                &#9660;
                            </span>
                        </h3>
                        {isEducationOpen && (
                            <div className="overflow-hidden transition-max-height duration-300" style={{ maxHeight: isEducationOpen ? 'none' : '0' }}>
                                <blockquote className="italic text-gray-600 border-l-4 border-primary pl-4 my-4">
                                    "Ich habe immer Dinge getan, für die ich noch nicht ganz bereit war. So wächst man."
                                    <footer className="text-sm mt-2">- Marissa Mayer</footer>
                                </blockquote>
                                <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
                                    <div className="flex flex-col space-y-4">
                                        <p className="text-gray-600">
                                            Meine Allgemeine Hochschulreife (Abitur mit Fachrichtung Wirtschaft)  erlangte ich am Johann-Conrad-Schlaun-Kolleg in Warburg . Schon damals habe ich die Menschen der Stadt Warburg und der Dörfer geschätzt, deren Bürgermeister ich dreißig Jahre später geworden bin.
                                        </p>
                                    </div>
                                    <br></br>
                                    <img
                                        src="/gallery_images/img_9946~01.jpg"
                                        alt="Schlaun-Colleg"
                                        className="w-full md:w-1/4 rounded-xl md:ml-4"
                                    />
                                </div>
                                <p className="text-gray-600">
                                    <br></br>
                                    Nach Ausbildung und Berufstätigkeit als Versicherungskaufmann beim Gerling-Konzern in Kassel und Korbach, strebte ich nach Weiterentwicklung und begann ein Studium der Wirtschaftswissenschaften in Kassel mit dem Schwerpunkt „Personal und Arbeitsökonomie“. Schon damals lag es mir am Herzen, Menschen gut zu führen und Entwicklungskonzepte für Menschen in Unternehmen zu finden. „Lean Management in der öffentlichen Verwaltung“ war der Titel meiner ersten Diplomarbeit. „Wie kann man Verwaltung besser, effizienter, menschenfreundlicher machen?“, ist auch heute für mich als Bürgermeister eine der wichtigen Fragestellungen.
                                </p>
                                <br></br>
                                <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
                                    <div className="flex flex-col space-y-4">

                                        <p className="text-gray-600">
                                            Ein Teil meines Studiums verbrachte ich in den USA,in Washington D.C.. Im Zentrum der amerikanischen Politik konnte ich mein Interesse an Politik, der Welt und den Menschen kombinieren und lebte unweit des berühmten Watergate-Gebäudekomplex. Hier konnte ich mich sprachlich und menschlich weiterentwickeln, die Vielfältigkeit anderen Kulturen erfahren und bei Greenpeace U.S. ein Praktikum machen. Meine „Master“-Arbeit: „Human Ressource & Cross Culture Management“ konnte ich durch diese Erfahrungen mit sehr gutem Ergebnis abschließen. Meine Zeit in Amerika ermöglichte mir einen weltoffenen und toleranten Blick auf das  menschliche Miteinander und kommt mir auch heute noch bei meiner Arbeit als Bürgermeister zugute.
                                        </p>
                                    </div>
                                    <br></br>
                                    <img
                                        src=" /gallery_images/University.jpg"
                                        alt="University"
                                        className="w-full md:w-1/4 rounded-xl md:ml-4"
                                    />

                                </div>
                                <div className="space-y-6">
                                    <div>
                                        <br></br>
                                        <h4 className="text-xl font-medium text-primary cursor-pointer mb-2" onClick={(event) => {
                                            event.preventDefault();
                                            setisProfessionOpen(!isProfessionOpen);
                                        }}>
                                            Beruf als Berufung
                                            <span className="ml-2 transition-transform transform" style={{ display: 'inline-block', transform: isProfessionOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                                                &#9660;
                                            </span>
                                        </h4>
                                        {isProfessionOpen && (
                                            <div className="overflow-hidden transition-max-height duration-300" style={{ maxHeight: isProfessionOpen ? 'none' : '0' }}>
                                                <p className="text-gray-600">
                                                    Nach dem Studium wurde ich gleich ins kalte Wasser geworfen: Das Amt als Geschäftsführer der CDU-Kassel-Land und Kassel-Stadt prägten meine politischen Erfahrungen. In 1 ½ Jahren  managte ich erfolgreich eine Oberbürgermeisterwahl und die Landtagswahl in Kassel. Aufgrund meines erfolgreichen Wirkens wurde ich zum Persönlichen Referenten des hessischen Ministers für Umwelt, Landwirtschaft und Forsten, Wilhelm Dietzel berufen. Im Wiesbadener Büro war ich zuständig für den reibungslosen Ablauf der Ministertätigkeit, der Besprechung und Planung von Projekten gemeinsam mit dem Minister am Rande des Landtagsplenum, sowie Ansprechpartner für die Staatsweingüter und das Kloster Eberbach in Eltville. Bis zu meiner Bürgermeisterwahl waren dies beruflich die schönsten und herausforderndsten Jahre. Wilhelm Dietzel, erlebte ich als einen Minister, der menschlich handelt, gutes politisches Gespür hat und von dem ich  einen klaren , kooperativen Führungsstill lernen durfte.
                                                </p>
                                                <p className="text-gray-600">
                                                    Mit der Gründung meiner Familie ging es im Jahr 2003 beruflich zurück in unsere Region. In Kassel war ich ab 2003 im Bereich Landwirtschaft für Controlling, Finanzen, Öffentlichkeitsarbeit und viele Projekte zuständig. Wir entwickelten damals den Landesbetrieb Landwirtschaft zu einem modernen Dienstleister für Beratung, Bildung, Fachinformationen für den ländlichen Raum.
                                                </p>
                                                <br></br>
                                                <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
                                                    <div className="flex flex-col space-y-4">
                                                        <p className="text-gray-600">
                                                            Im Jahr 2018 wurde mir die sehr große Ehre zuteil, vom hessischen Ministerpräsidenten Volker Bouffier persönlich zum Regionalbeauftragten für Nordhessen berufen zu werden. Er schätze meine Kompetenz, meinen Willen Ideen voranzubringen und sah dies Aufgabe gut bei mir betraut. Als Leuchtturm für Nordhessen beriet ich von nun an Bürgermeister von Bad Karlshafen bis Marburg über Förderprogramme der Landesregierung im Ländlichen Raum, überreichte Förderbescheide und war bis zu meiner Wahl als Bürgermeister Teil der Offensive „Land hat Zukunft“.
                                                        </p>
                                                        <p className="text-gray-600">
                                                            All dies hat mir sehr geholfen, mein Amt als Bürgermeister der Hansestadt Warburg am 1.November 2020 anzutreten und die Erfordernisse von Dörfern und Kernstadt unserer schönen Heimatstadt einschätzen und zukunftsfähig zu machen.
                                                        </p>
                                                        <br></br>
                                                    </div>
                                                    <img
                                                        src=" /gallery_images/Regionalbeauftragte-2249.jpg"
                                                        alt="Regionalbeauftragte"
                                                        className="w-full md:w-1/4 rounded-xl md:ml-4"
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    <div>
                                        <br></br>
                                        <h4 className="text-xl font-medium text-primary cursor-pointer mb-2" onClick={(event) => {
                                            event.preventDefault();
                                            setisPoliticalCareerOpen(!isPoliticalCareerOpen);
                                        }}>
                                            Politischer Werdegang
                                            <span className="ml-2 transition-transform transform" style={{ display: 'inline-block', transform: isPoliticalCareerOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                                                &#9660;
                                            </span>
                                        </h4>
                                        {isPoliticalCareerOpen && (
                                            <div className="overflow-hidden transition-max-height duration-300" style={{ maxHeight: isPoliticalCareerOpen ? 'none' : '0' }}>
                                                <blockquote className="italic text-gray-600 border-l-4 border-primary pl-4 my-4">
                                                    "Sei du selbst die Veränderung, die du dir wünschst für diese Welt."
                                                    <footer className="text-sm mt-2">- Mahatma Gandhi</footer>
                                                </blockquote>
                                                <p className="text-gray-600">
                                                    Schon seit frühster Kindheit war ich an politischen Themen interessiert und interessierte  mich für die Entwicklung des Gemeinwesens .  Beim konstruktiven Misstrauensvotum von Helmut Kohl gegenüber Kanzler Helmut Schmidt saß ich gebannt am Radio und verfolgte die politische Entwicklung von Helmut Kohl, Gerhard Schröder und unserer Kanzlerin Angela Merkel großem Interesse.
                                                </p>
                                                <p className="text-gray-600">
                                                    In meiner Jugend initiierte ich als Vorsitzender der Jungen Union die Entfernung eines Zigarettenautomats am Schulweg, machte auf Umweltthemen aufmerksam  und organisierte Jugendaustausche nach der Grenzöffnung in die DDR.
                                                </p>
                                                <p className="text-gray-600">
                                                    Aus  meinem Interesse wurde Leidenschaft. So trat ich 1989 im Zuge der friedlichen Revolution in der DDR in die CDU ein. Ich war und bin christlicher Demokrat im Herzen. Die Guten müssen bleiben. Aus diesem Grund halte ich an meiner christdemokratischen Überzeugung auch weiterhin fest.
                                                </p>
                                                <br></br>
                                                <p className="text-gray-600">
                                                    Bereits mit 24 Jahren wurde ich ins Volkmarser Stadtparlament gewählt. Dieses Amt gestaltete ich bis zu meiner Wahl als Bürgermeister insgesamt 27 (!) Jahre mit Freude, Leidenschaft und Engagement. In meinen zahlreichen Ämtern, etwa als Ausschussvorsitzender, stellv. Stadtverordnetenvorsteher, stellv. Fraktionsvorsitzender stellte ich unter Beweis, dass Miteinander und Führungsstärke meine Kernkompetenzen sind. So unterstütze ich den damaligen Bürgermeister Hartmut Linnekugel und entwickelte die Stadt Volkmarsen bei der innerstädtischen Verkehrsumgehung, dem wirtschaftlichen Fortbestand, dem Umbau des Marktplatzes und viele andere Themen.
                                                </p>
                                                <p className="text-gray-600">
                                                    Weiterhin hatte ich auf Kreis- und Landesebene viele CDU-Ämter inne:  So war ich Vorsitzender des Landesfachausschusses des Ländlichen Raum, Mitglied des Kreistages und des Kreisausschusses (über 20 Jahre), stellv. Kreisvorsitzender oder Bezirksvorsitzender. Schon immer lag und liegt mit die CDU am Herzen.
                                                </p>
                                                <br></br>
                                                <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
                                                    <p className="text-gray-600">
                                                        Über 14 Jahre lang leitete ich den Volkmarser CDU-Stadtverband und entwarf gemeinsam mit meinen Mitstreiteren, insbesondere Thomas Viesehon, das Format „Politischer Aschermittwoch“. Der Volkmarser „Politische Aschermittwoch“ war überregional bekannt und prominente Gäste waren jährlich an der Tagesordnung. Ob Friedrich Merz, Ministerpräsidenten wie Roland Koch, Volker Bouffier, Thomas Müller, Christian Wulff, Horst Seehofer, Minister wie Thomas de Maizière. Jährlich kamen mehrere tausend Besuchernach Volkmarsen zu dieser Veranstaltung und Höhepunkte waren die Besuche von Bundeskanzlerin Angela Merkel, bei der damals über 3.300 Besucher in der Nordhessenhalle anwesend waren.
                                                    </p>
                                                    <br></br>
                                                    <img
                                                        src=" /gallery_images/2016-02-29 18.09.00.jpg"
                                                        alt="Merkel"
                                                        className="w-full md:w-1/4 rounded-xl md:ml-4"
                                                    />
                                                </div>
                                                <br></br>
                                                <p className="text-gray-600">
                                                    Mit der Wahl zum Bürgermeister in Warburg beendete ich die politische Tätigkeit in der Partei, denn als Bürgermeister bin ich für alle Bürgerinnen und Bürger tätig. Im Sinne einer neutralen und überparteilichen Führung und Lenkung der Stadt ist es geboten, Parteiinteressen zurückzustellen. Unter meiner Führung gab es und wird es keine Hinterzimmerpolitik geben, darauf können sich die Bürger unserer Stadt verlassen.
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Bürgermeister für alle */}
                    <div className="glass rounded-xl p-8">
                        <h3 className="text-2xl font-semibold text-primary mb-4 cursor-pointer" onClick={(event) => {
                            event.preventDefault();
                            setIsMayorOpen(!isMayorOpen);
                        }}>
                            Unser Bürgermeister für alle
                            <span className="ml-2 transition-transform transform" style={{ display: 'inline-block', transform: isMayorOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                                &#9660;
                            </span>
                        </h3>
                        {isMayorOpen && (
                            <div className="overflow-hidden transition-max-height duration-300" style={{ maxHeight: isMayorOpen ? 'none' : '0' }}>
                                <blockquote className="italic text-gray-600 border-l-4 border-primary pl-4 my-4">
                                    "Motivation ist, Dinge zu tun, die uns wichtig sind, zusammen mit Menschen, die uns wichtig sind."
                                    <footer className="text-sm mt-2">- Sheryl Sandberg</footer>
                                </blockquote>
                                <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
                                    <div className="flex flex-col space-y-4">
                                        <p className="text-gray-600">
                                            Seit dem 1. November 2020 bin ich mit viel Freude, Menschlichkeit, Tatkraft und Führungsstärke Bürgermeister der schönen Hansestadt Warburg mit  ihrer faszinierenden Kernstadt und  den 15 wunderschönen Dörfern.
                                        </p>
                                        <p className="text-gray-600">
                                            Trotz aller Herausforderungen,  mancher Anfeindungen aus der Politik,  mancher Unzufriedenheit einzelner Bürger ist es für mich nach wie vor der schönste Job, den ich in meiner vielfältigen Karriere ausgeführt habe. Tagtäglich erfahre ich die breite Zustimmung und Dankbarkeit der Mitbürger zu meiner Arbeit. Dies bestärkt mich in meiner Haltung und meinem Engagement. Ich bin gekommen, um zu bleiben!
                                        </p>
                                        <p className="text-gray-600">
                                            Noch keinen Tag bereute ich meine Entscheidung zur Amtsübernahme. Nach wie vor gehe ich  jeden Tag gerne zur Arbeit, freue mich über das Engagement der Mitarbeitenden im Rathaus, in den Stadtwerken in den Kommunalunternehmen Warburg (KUW), treffe gerne die Menschen in unserer schönen Stadt und engagiere mich mit Freude für die Dörfer.
                                            Dabei ist es mir wichtig, unsere Stadt im Team gemeinsam mit den Menschen unsere Stadt zu entwickeln, als Ideengeber voranzuschreiten, das finanziell machbare im Blick zu behalten, bei den Fördergeldern immer einen Schritt voraus zu sein, konstruktiv die Verwaltung zu führen und unsere Stadt und die Dörfer zukunftsfähig zu machen.
                                        </p>
                                    </div>
                                    <br></br>
                                    <img
                                        src=" /gallery_images/IMG_2613-B.jpg"
                                        alt="Merkel"
                                        className="w-full md:w-1/4 rounded-xl md:ml-4"
                                    />
                                </div>

                                <div className="space-y-4 mt-6">
                                    <h4 className="text-xl font-medium text-primary mb-2">
                                        Als Bürgermeister für alle bin ich
                                    </h4>
                                    <ul className="list-disc list-inside space-y-2 text-gray-600 pl-4">
                                        <li>
                                            <span className="text-primary font-bold">Christlicher Demokrat im Herzen</span> mit Menschlichkeit und christlich & sozialen Werten
                                        </li>
                                        <li>
                                            <span className="text-primary font-bold">Warburger aus Leidenschaft</span> und erhalte und gestalte gerne die Schönheit der Stadt & der Dörfer
                                        </li>
                                        <li>
                                            <span className="text-primary font-bold">Visionär/Gestalter der Zukunft</span> mit dem Gestaltungswillen, unsere Region kraftvoll zukunftsfähig voranzubringen
                                        </li>
                                        <li>
                                            <span className="text-primary font-bold">Macher mit Zielen</span> mit dem Willen zur zeitnahen Umsetzung und effizienten Verwirklichung in den unterschiedlichen Bereichen
                                        </li>
                                    </ul>
                                </div>
                                <br></br>
                                <p className="text-gray-600">
                                    Über Ihre und Eure Unterstützung und Stimme bei der Bürgermeisterwahl am 14. September 2025 freue ich mich sehr.
                                </p>
                                <p className="text-gray-600">
                                    Ihr/Euer
                                    Tobias Scherf
                                </p>
                                <br></br>
                                <p className="text-gray-600">
                                    Unser Bürgermeister für alle
                                </p>
                                <p className="text-primary">
                                    <b>führungsstark & wegweisend</b>
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section >
    );
}