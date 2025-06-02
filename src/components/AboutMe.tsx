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
                    Persönliches
                </h2>
                <div className="text-center">
                    <p className="text-gray-600">
                        Schön, dass Sie und Ihr mehr über mich als Mensch und Bürgermeister erfahren möchtet.
                    </p>
                    <p className="text-gray-600 flex-1">
                        Ich bin jemand, der mit beiden Beinen fest im Leben steht – verwurzelt in Familie, Freundschaften und einem klaren Werteverständnis. Früh habe ich gelernt, was Zusammenhalt, Verantwortung und Einsatz bedeuten – und genau das prägt mein Handeln bis heute.
                    </p>
                    <p className="text-gray-600 flex-1">
                        Meine Familie ist mein größter Rückhalt. Sie gibt mir Kraft, Orientierung und Motivation, mich mit Herzblut für die Menschen in Warburg einzusetzen. Ich glaube fest daran, dass wir gemeinsam viel bewegen können – für unsere Stadt, für unsere Dörfer, für ein starkes Miteinander.
                    </p>
                    <p className="text-gray-600 flex-1">
                        Ich freue mich auf den persönlichen Austausch – mit Ihnen und Euch.
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

                                <div className="flex flex-col md:flex-row md:items-start md:space-x-8">
                                    <div className="flex flex-col space-y-4 flex-1">
                                        <p className="text-gray-600">
                                            Ich bin auf dem Bauernhof meiner Eltern zwischen Welda und Volkmarsen groß geworden. Harte Arbeit war bei uns Teil des Alltags – sie prägte das Familienleben und war selbstverständlich. Die tägliche Arbeit um das tägliche Brot bestimmte unseren Rhythmus – und den der Generation meiner Eltern.
                                        </p>
                                        <p className="text-gray-600">
                                            Morgens und abends Kühe melken, Schweine versorgen, Felder bestellen. Dazu Haus, Hof, Garten – und wir Kinder mittendrin. Wir hackten Runkeln und Zuckerrüben, ernteten, verluden – Urlaub war ein Fremdwort.
                                        </p>
                                        <p className="text-gray-600">
                                            Auf einem Bauernhof aufzuwachsen hieß, früh mit anzupacken und auch mal zu verzichten. Aber gerade das hat mir ein tiefes Gefühl für das Leben und den Wert von Arbeit vermittelt. Die Früchte unseres Tuns waren greifbar und unmittelbar – und genau das hat meine Kindheit so besonders gemacht.
                                        </p>
                                        <p className="text-gray-600">
                                            Trotz – oder vielleicht gerade wegen – all dieser Erfahrungen blicke ich mit großer Dankbarkeit auf diese Zeit zurück.
                                        </p>
                                    </div>
                                    <img
                                        src="/gallery_images/Bauernhof.png"
                                        alt="Bauernhof"
                                        className="w-full md:w-1/4 rounded-xl mt-4 md:mt-0"
                                    />
                                </div>
                                <br></br>
                                <div className="space-y-4">
                                    <h4 className="text-xl font-medium text-primary cursor-pointer mb-2" onClick={(event) => {
                                        event.preventDefault();
                                        setisChildhoodExperienceOpen(!isChildhoodExperienceOpen);
                                    }}>
                                        Ein prägendes Kindheitserlebnis
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
                                                        Ein einschneidendes Erlebnis meiner Kindheit war ein schwerer Unfall mit zwölf Jahren in Bad Arolsen – ich wurde von einem LKW überrollt. Die Verletzungen waren lebensbedrohlich, ich galt als klinisch tot. Doch ich wurde ins Leben zurückgeholt – und habe mich Stück für Stück selbst zurück ins Leben gekämpft.
                                                    </p>
                                                    <p className="text-gray-600">
                                                        Dank der hervorragenden medizinischen Versorgung in Marburg, der Fürsorge meiner Eltern und Verwandten – und nicht zuletzt durch meinen eigenen Lebenswillen – blicke ich heute mit großer Dankbarkeit auf diese Zeit zurück.                                                    </p>
                                                    <p className="text-gray-600">
                                                        Seit diesem Unfall weiß ich, wie kostbar das Leben wirklich ist. Ich habe gelernt: Wer fällt, darf auch wieder aufstehen – und sich dem Leben mit all seinen Herausforderungen stellen. Jeder ist seines Glückes Schmied – und ich schmiede gerne: an meinem eigenen Glück und am Glück anderer.
                                                    </p>
                                                    <p className="text-gray-600">
                                                        Nie aufgeben, immer mit Zuversicht nach vorn schauen – diese Haltung begleitet mich seitdem. Sie hilft mir, Rückschläge zu überwinden, berufliche wie persönliche Herausforderungen zu meistern und das Leben in all seinen Facetten anzunehmen.
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
                                            Ich bin ein Familienmensch durch und durch. Meine vier Kinder wurden im ersten Jahrzehnt dieses Jahrhunderts geboren – heute sind sie 15, 18, 22 und 25 Jahre alt. Es ist ein großes Glück, Kinder zu haben und sie auf ihrem Lebensweg begleiten zu dürfen. Für sie da zu sein – in guten wie in herausfordernden Zeiten – war und ist mir ein Herzensanliegen. Auch in meiner Tätigkeit als Bürgermeister spielt dieser Wert eine zentrale Rolle.
                                        </p>
                                        <p className="text-gray-600">
                                            Kinder – ganz gleich welchen Alters – brauchen Nähe, Unterstützung, Wärme und ein offenes Ohr. Das gilt besonders, wenn Eltern getrennt leben. Eine große Hilfe und Stütze ist mir dabei meine Mutter, Oma Renate, die sich liebevoll um ihre Enkelkinder kümmert, mich entlastet und das Herz unserer Familie ist.
                                        </p>
                                        <p className="text-gray-600">
                                            Die Rolle als Vater habe ich immer mit Freude und voller Überzeugung gelebt. Nicht selten wechsle ich zwischen zwei Terminen in Warburg, um die Jüngste zum Handball zu bringen oder die Zweitjüngste bei Auftritten der Volkmarser Prinzengarde zu begleiten. Es ist ein Geschenk, die eigenen Kinder aufwachsen zu sehen, sie in ihren Höhen und Tiefen zu begleiten und ihnen den Rücken zu stärken, damit sie ihren eigenen Weg gehen können.
                                        </p>
                                        <p className="text-gray-600">
                                            Ja, Familie und Bürgermeisteramt lassen sich miteinander vereinbaren – mit Kraft, Willen und dem festen Entschluss, nicht zu zögern, sondern zu handeln. Besonders in der Corona-Zeit war das eine große Herausforderung. Auch meine Kinder waren in unterschiedlichem Maß betroffen und mussten ihren Weg finden. Diese Erfahrungen als Vater haben mich geprägt – sie fließen direkt in mein Engagement für familienfreundliche Strukturen und Angebote in unserer Stadt ein. Denn Eltern, Kinder und Familien verdienen echte Unterstützung – und dafür setze ich mich mit ganzem Herzen ein.
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
                                                <blockquote className="italic text-gray-600 border-l-4 border-primary pl-4 my-4">
                                                    "Kinder zeigen uns, wie wichtig Hoffnung und Veränderung sind. Mit der richtigen Erziehung und Liebe können wir ihnen ein Fundament für die Zukunft geben."
                                    <               footer className="text-sm mt-2">- Maria Montessori</footer>
                                                </blockquote>
                                                <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-4">
                                                    <div className="flex flex-col space-y-4">
                                                        <p className="text-gray-600">
                                                         Mein Sohn Kevin studiert Elektrotechnik in Gießen. Er strahlt eine große Ruhe und Gelassenheit aus – eine Eigenschaft, die ihn schon immer ausgezeichnet hat. Kevin genießt das Leben, hat dabei aber seine Ziele klar im Blick. Neben dem Studium engagiert er sich als Fußballschiedsrichter in der Region und bringt sich auch politisch aktiv ein.                                                    </p>
                                                        <p className="text-gray-600">
                                                          Als gelernter Elektroniker für Geräte- und Systemtechnik kann er sein Studium heute zum Teil selbst finanzieren – eine Leistung, auf die ich sehr stolz bin. Kevin unterstützt mich, wo er kann, und hat einen feinen Blick dafür, was im Leben zählt.                                                    </p>
                                                        <p className="text-gray-600">
                                                            Seine Worte bedeuten mir viel:                                                    </p>
                                                        <blockquote className="italic text-gray-600 border-l-4 border-primary pl-4 my-4">
                                                            „Mein Vater übt das Amt mit Freude und Engagement aus. Das ist gut für Warburg."
                                                        </blockquote>
                                                    </div>
                                                    <br></br>
                                                    <img
                                                        src=" /gallery_images/IMG_8281.jpg"
                                                        alt="Kevin"
                                                        className="w-full md:w-1/4 rounded-xl md:ml-4 order-last"
                                                    />
                                                </div>
                                                <br></br>
                                                <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-4">
                                                    <img
                                                        src=" /gallery_images/IMG_9195.jpg"
                                                        alt="Roxana"
                                                        className="w-full md:w-1/4 rounded-xl md:ml-4 order-last md:order-first"
                                                    />
                                                    <br></br>
                                                    <div className="flex flex-col space-y-4">
                                                        <p className="text-gray-600">
                                                            Meine älteste Tochter Roxana liebt das Leben, ist offen für andere Menschen und übernimmt gerne Verantwortung – in der Familie ebenso wie in der Gesellschaft. Sie unterstützt ihre Geschwister mit Herz und Verstand und engagiert sich in vielen Bereichen. Früher tanzte sie begeistert in der Prinzengarde – und auch darüber hinaus war sie immer aktiv.                                                        </p>
                                                        <p className="text-gray-600">
                                                            Nach dem Abitur absolvierte sie ein Freiwilliges Soziales Jahr an der Karl-Preising-Schule in Bad Arolsen – einer inklusiven Schule mit lernschwachen und beeinträchtigten Kindern. Dort entdeckte sie ihre Leidenschaft fürs Lehren und Begleiten.                                                        </p>
                                                        <p className="text-gray-600">
                                                            Heute studiert Roxana Lehramt für Sonderpädagogik mit dem Hauptfach Mathematik in Gießen. Parallel arbeitet sie hier bei uns im Jugenddorf in der Gruppenbetreuung und finanziert sich so einen Teil ihres Studiums selbst.                                                        </p>
                                                        <p className="text-gray-600">
                                                            Sie sagt:                                                        </p>
                                                        <blockquote className="italic text-gray-600 border-l-4 border-primary pl-4 my-4">
                                                            „Mein Vater hat sich immer Zeit für uns Kinder genommen – trotz seines ehrenamtlichen Engagements und auch als Bürgermeister. Familie ist ihm sehr wichtig."
                                                        </blockquote>
                                                    </div>
                                                    <br></br>
                                                </div>
                                                <br></br>
                                                <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-4">
                                                    <br></br>
                                                    <div className="flex flex-col space-y-4">
                                                        <p className="text-gray-600">
                                                            Riana hat ein feines Gespür für die Familie – sie ist unsere Kümmerin mit großem Herzen. Ihre Willensstärke beeindruckt mich immer wieder. Sie kocht und backt leidenschaftlich gerne und sorgt liebevoll dafür, dass es ihren Omas gutgeht. Ein besonderes Hobby von ihr ist das Lesen englischsprachiger Bücher – darin kann sie vollkommen eintauchen. Seit ihrer frühen Kindheit tanzt Riana in der Prinzengarde und ist heute aktives Gardemädchen in der Großen Garde der Volkmarser Karnevalsgesellschaft.                                                        </p>
                                                        <p className="text-gray-600">
                                                            Dieses Jahr schließt sie ihr Fachabitur mit dem Schwerpunkt Sozialwesen ab. Im Anschluss möchte sie ein Freiwilliges Soziales Jahr absolvieren – eine Entscheidung, die ihren sozialen Blick und ihr Verantwortungsbewusstsein unterstreicht.                                                        </p>
                                                        <p className="text-gray-600">
                                                        Riana ist großer Taylor-Swift-Fan, und es war für uns beide ein tolles Erlebnis, gemeinsam ein Konzert zu besuchen – Vater und Tochter, mittendrin.                                                        </p>
                                                        <p className="text-gray-600">
                                                            Sie sagt mit einem Augenzwinkern:                                                        </p>
                                                        <blockquote className="italic text-gray-600 border-l-4 border-primary pl-4 my-4">
                                                            „Damit mein Vater bei seinen vielen Terminen nichts vergisst, erinnere ich ihn manchmal daran, was bei uns so ansteht. Dann hat er die Familie und meine Oma gut im Blick – und alle sind gut versorgt."
                                                        </blockquote>
                                                    </div>
                                                    <br></br>
                                                    <img
                                                        src=" /gallery_images/IMG_8985.jpg"
                                                        alt="Riana"
                                                        className="w-full md:w-1/4 rounded-xl md:ml-4 md:order-last"
                                                    />
                                                </div>
                                                <br></br>
                                                <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-4">
                                                    <img
                                                        src=" /gallery_images/IMG_6287.jpg"
                                                        alt="Lysandra"
                                                        className="w-full md:w-1/4 rounded-xl md:ml-4 order-last md:order-first"
                                                    />
                                                    <br></br>
                                                    <div className="flex flex-col space-y-4">
                                                        <p className="text-gray-600">
                                                        Lysandra ist das jüngste unserer Kinder – und hat früh gelernt, sich durchzusetzen. Sie sprüht vor Energie, Lebensfreude und Neugier. Bei ihr heißt es: nicht lange fragen, einfach machen. Probieren geht über Studieren – das ist ihre Art, die Welt zu entdecken.                                                        </p>
                                                        <p className="text-gray-600">
                                                        Sie liebt Fußballspiele und Konzerte, spielt selbst Handball in der B-Jugend des TV Külte – als mutige Torfrau, die dem Ball furchtlos entgegentritt. Ihr Motto: „Wer hinfällt, muss auch wieder aufstehen.“ Das lebt sie – im Sport wie im Alltag. Familie, Freunde und das gemeinsame Feiern sind ihr ebenso wichtig wie Engagement in der Schule. Ob als Präfektin oder Klassensprecherin – sie übernimmt Verantwortung mit Herz und Haltung.                                                        </p>
                                                        <p className="text-gray-600">
                                                        In diesem Jahr steht ein großes Abenteuer bevor: Ein einjähriger Highschool-Aufenthalt in den USA. Ein mutiger Schritt, den sie mit Begeisterung geht – und auf den wir alle sehr stolz sind.                                                        </p>
                                                        <p className="text-gray-600">
                                                        Sie sagt:                                                        </p>
                                                        <blockquote className="italic text-gray-600 border-l-4 border-primary pl-4 my-4">
                                                            „Schade, dass ich bei der Wahl von Papa nicht in Deutschland bin – ich unterstütze ihn so gerne. Einfach klasse, was er alles für Jugendliche in Warburg macht."
                                                        </blockquote>
                                                    </div>
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
                                                    "Glücklich allein ist die Seele, die liebt." "
                                                    <footer className="text-sm mt-2">- Johann Wolfgang von Goethe</footer>
                                                </blockquote>
                                                <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
                                                    <div className="flex flex-col space-y-4">
                                                        <p className="text-gray-600">
                                                        Seit über drei Jahren ist Kathrin die Partnerin an meiner Seite. Dank eines Seminars des Standesamts in Bad Salzschlirf haben wir uns kennengelernt – der Bürgermeister und die engagierte Diplom-Psychologin. Aus dieser Begegnung ist eine tiefe Verbundenheit entstanden. Unsere Liebe wächst – getragen von gegenseitigem Respekt, Vertrauen und echter Wertschätzung.                                                        </p>
                                                        <p className="text-gray-600">
                                                        Einen Bürgermeister an seiner Seite zu haben, ist nicht immer leicht – auch die Wochenenden sind oft mit Terminen gefüllt, das Amt kennt keine festen Arbeitszeiten. Umso mehr schätze ich Kathrins Verständnis, ihre Offenheit und die Fähigkeit, mir Freiraum zu geben. Gleichzeitig genießen wir unsere gemeinsame Zeit ganz bewusst. Besonders schön ist es, wenn sie mich zu Terminen begleitet und wir unser gemeinsames Interesse an den Menschen im Warburger Land leben können.                                                        </p>
                                                        <p className="text-gray-600">
                                                        Wandern ist unsere große Leidenschaft – in der Natur tanken wir Kraft und Ruhe. Auch Kunst, Kultur und Konzerte begeistern uns beide. Unsere Hobbys teilen wir mit Freude, und das Reisen verbindet uns – ob zu zweit oder mit den Kindern, die wir beide in unsere Partnerschaft mitgebracht haben.                                                        </p>
                                                        <p className="text-gray-600">
                                                        Für Kathrin ist es wichtig, dass unsere Beziehung auf Gleichberechtigung, persönlichem Wachstum und gegenseitiger Verantwortung beruht.                                                        </p>
                                                        <p className="text-gray-600">
                                                        Sie sagt:                                                        </p>
                                                        <blockquote className="italic text-gray-600 border-l-4 border-primary pl-4 my-4">
                                                            „Tobias ist ein Mann, der Frauen nicht diskriminiert oder kleinmacht – er hat ihre Bedürfnisse im Blick. In Warburg setzt er sich für Gleichberechtigung in Verwaltung und Stadtrat ein. Er versteht, wie wichtig gut ausgestattete Kindergärten, Schulen, Vereine und kulturelle Angebote für das Wohl aller Bürgerinnen und Bürger sind."
                                                        </blockquote>
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
                            Mein Bildungsweg und der Blick über den Tellerrand
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
                                        Meine Allgemeine Hochschulreife mit Fachrichtung Wirtschaft habe ich am Johann-Conrad-Schlaun-Kolleg in Warburg erworben. Schon damals habe ich die Menschen in Warburg und den umliegenden Dörfern sehr geschätzt – kaum zu ahnen, dass ich rund 30 Jahre später ihr Bürgermeister werden würde.                                        </p>
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
                                    Nach einer Ausbildung und mehrjähriger Berufstätigkeit als Versicherungskaufmann beim Gerling-Konzern in Kassel und Korbach wuchs in mir der Wunsch nach Weiterentwicklung. Ich entschied mich für ein Studium der Wirtschaftswissenschaften in Kassel mit dem Schwerpunkt „Personal und Arbeitsökonomie“. Schon damals war mir wichtig, wie gute Führung gelingt und wie man Menschen in Unternehmen sinnvoll begleiten und fördern kann. Meine erste Diplomarbeit widmete ich dem Thema: „Lean Management in der öffentlichen Verwaltung“. Die Frage, wie man Verwaltung effizienter, bürgernäher und menschlicher gestalten kann, beschäftigt mich bis heute – auch als Bürgermeister.                                </p>
                                <br></br>
                                <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
                                    <div className="flex flex-col space-y-4">

                                        <p className="text-gray-600">
                                        Ein prägender Abschnitt meines Studiums führte mich in die USA – nach Washington, D.C. Dort, im politischen Zentrum der Vereinigten Staaten, konnte ich mein Interesse an Politik, Gesellschaft und interkulturellem Austausch voll ausleben. Ich lebte unweit des bekannten Watergate-Komplexes, absolvierte ein Praktikum bei Greenpeace U.S. und entwickelte mich sowohl sprachlich als auch persönlich weiter. Die Vielfalt der Kulturen, die Offenheit und die Energie dieses Ortes haben meinen Horizont nachhaltig erweitert.                                        </p>
                                        <p className="text-gray-600">
                                        Meine Abschlussarbeit zum Thema „Human Resource & Cross Culture Management“ konnte ich mit Bestnote abschließen – nicht zuletzt dank der Erfahrungen, die ich in Amerika sammeln durfte. Der weltoffene und tolerante Blick auf das Miteinander, den ich dort entwickelt habe, prägt meine Haltung bis heute – gerade in meiner Rolle als Bürgermeister.                                                      
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
                                            Mein beruflicher Weg – von Verantwortung getragen
                                            <span className="ml-2 transition-transform transform" style={{ display: 'inline-block', transform: isProfessionOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                                                &#9660;
                                            </span>
                                        </h4>
                                        {isProfessionOpen && (
                                            <div className="overflow-hidden transition-max-height duration-300" style={{ maxHeight: isProfessionOpen ? 'none' : '0' }}>
                                                <p className="text-gray-600">
                                                Nach dem Studium wurde ich direkt ins kalte Wasser geworfen: Als Geschäftsführer der CDU Kassel-Land und Kassel-Stadt konnte ich erste intensive politische Erfahrungen sammeln. In anderthalb Jahren organisierte und begleitete ich erfolgreich eine Oberbürgermeisterwahl sowie die Landtagswahl in Kassel. Diese Zeit war prägend – sie forderte mich heraus und bestätigte zugleich meinen Weg in der Politik.                                                </p>
                                                <p className="text-gray-600">
                                                Aufgrund meines Engagements und der erfolgreichen Arbeit wurde ich zum Persönlichen Referenten des hessischen Ministers für Umwelt, Landwirtschaft und Forsten, Wilhelm Dietzel, berufen. In Wiesbaden war ich für die Koordination seiner Amtsgeschäfte, Projektabsprachen am Rande der Landtagsplenarsitzungen sowie für die Staatsweingüter und das Kloster Eberbach in Eltville zuständig. Diese Jahre waren – beruflich wie persönlich – besonders erfüllend. Von Wilhelm Dietzel habe ich viel gelernt: Menschlichkeit, politisches Fingerspitzengefühl und einen klaren, kooperativen Führungsstil.                                                </p>
                                                <p className="text-gray-600">
                                                Mit der Gründung meiner Familie zog es mich 2003 zurück in unsere Region. In Kassel übernahm ich beim Landesbetrieb Landwirtschaft Verantwortung für Controlling, Finanzen, Öffentlichkeitsarbeit und vielfältige Projekte. Gemeinsam mit einem engagierten Team entwickelten wir den Betrieb zu einem modernen Dienstleister für Beratung, Bildung und Fachinformationen im ländlichen Raum weiter.                                                </p>
                                                <br></br>
                                                <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
                                                    <div className="flex flex-col space-y-4">
                                                        <p className="text-gray-600">
                                                        2018 wurde mir eine besondere Ehre zuteil: Der damalige hessische Ministerpräsident Volker Bouffier berief mich persönlich zum Regionalbeauftragten für Nordhessen. In dieser Funktion durfte ich Bürgermeisterinnen und Bürgermeister – von Bad Karlshafen bis Marburg – beraten, Förderprogramme des Landes vorstellen, Bescheide überreichen und Teil der Initiative „Land hat Zukunft“ sein. Es war eine Aufgabe mit Weitblick, Gestaltungsspielraum und viel Nähe zu den Menschen und den Themen der Region.                                                        </p>
                                                        <p className="text-gray-600">
                                                        All diese Erfahrungen haben mir geholfen, mich gut vorbereitet und mit vollem Herzen in das Amt als Bürgermeister der Hansestadt Warburg zu begeben, das ich seit dem 1. November 2020 ausübe. Ich kenne die Herausforderungen und Chancen, die unsere Dörfer und die Kernstadt mit sich bringen – und arbeite jeden Tag daran, unsere schöne Heimat zukunftsfähig weiterzuentwickeln.                                                        </p>
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
                                                        Über 14 Jahre lang leitete ich den Volkmarser CDU-Stadtverband und entwarf gemeinsam mit meinen Mitstreiteren, insbesondere Thomas Viesehon, das Format "Politischer Aschermittwoch". Der Volkmarser "Politische Aschermittwoch" war überregional bekannt und prominente Gäste waren jährlich an der Tagesordnung. Ob Friedrich Merz, Ministerpräsidenten wie Roland Koch, Volker Bouffier, Thomas Müller, Christian Wulff, Horst Seehofer, Minister wie Thomas de Maizière. Jährlich kamen mehrere tausend Besuchernach Volkmarsen zu dieser Veranstaltung und Höhepunkte waren die Besuche von Bundeskanzlerin Angela Merkel, bei der damals über 3.300 Besucher in der Nordhessenhalle anwesend waren.
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
                            Bürgermeister mit Herz und Haltung
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
                                        Seit dem 1. November 2020 bin ich aus voller Überzeugung Bürgermeister der Hansestadt Warburg – und dabei führungsstark, innovativ und tatkräftig für die Menschen in unserer lebendigen Kernstadt und den 15 wunderschönen Dörfern im Einsatz.                                        </p>
                                        <p className="text-gray-600">
                                        Trotz mancher Herausforderungen, politischer Anfeindungen oder der Kritik Einzelner ist und bleibt dieses Amt für mich der schönste und sinnstiftendste Beruf, den ich je ausüben durfte. Die Zustimmung und das Vertrauen vieler Mitbürgerinnen und Mitbürger bestärken mich täglich in meiner Arbeit. Ich bin gekommen, um zu bleiben!                                        </p>
                                        <p className="text-gray-600">
                                        Keinen einzigen Tag habe ich meine Entscheidung bereut. Ich gehe mit Begeisterung zur Arbeit, freue mich über das Engagement der Mitarbeitenden in Rathaus, Stadtwerken und Kommunalunternehmen Warburg (KUW), bin gerne vor Ort in den Ortsteilen unterwegs und treffe Menschen, die unsere Stadt mittragen und mitgestalten.                                        </p>
                                        <p className="text-gray-600">
                                        Dabei ist es mir besonders wichtig, gemeinsam mit den Bürgerinnen und Bürgern an der Weiterentwicklung unserer Stadt zu arbeiten. Ich will Impulse setzen, finanziell Machbares realisieren, Fördergelder gezielt nutzen, die Verwaltung konstruktiv führen und Warburg mit all seinen Ortsteilen zukunftsfähig gestalten.                                        </p>
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
                                            <span className="text-primary font-bold">Christlicher Demokrat mit Herz:</span> Menschlich, werteorientiert, sozial
                                        </li>
                                        <li>
                                            <span className="text-primary font-bold">Warburger aus Leidenschaft:</span> Ich bewahre und gestalte die Schönheit unserer Stadt und Dörfer
                                        </li>
                                        <li>
                                            <span className="text-primary font-bold">Visionär & Gestalter: </span> Mit Mut und Ideen die Zukunft unserer Region kraftvoll voranbringen
                                        </li>
                                        <li>
                                            <span className="text-primary font-bold">Macher mit Zielen:</span> Effizient, entschlossen, lösungsorientiert
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
                                Unser Bürgermeister für Warburg – führungsstark, innovativ, tatkräftig
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section >
    );
}