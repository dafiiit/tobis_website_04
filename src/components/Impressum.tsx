import React from 'react';

export default function Impressum() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-24">
      <section>
        <h2 className="text-3xl font-bold mb-6">Datenschutzerklärung</h2>

        <h3 className="text-2xl font-semibold mb-4">1. Datenschutz auf einen Blick</h3>
        <h4 className="text-xl font-medium mb-2">Allgemeine Hinweise</h4>
        <p className="mb-4">
          Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
        </p>
        <h4 className="text-xl font-medium mb-2">Datenerfassung auf dieser Website</h4>
        <p className="mb-4">
          Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen (z. B. über das Kontaktformular oder per E-Mail). Andere Daten werden automatisch beim Besuch der Website durch unser IT-System erfasst (z. B. IP-Adresse, Browser, Betriebssystem).
        </p>

        <h3 className="text-2xl font-semibold mb-4">2. Verantwortlicher</h3>
        <p className="mb-4">
          Verantwortlich für die Datenverarbeitung auf dieser Website:<br />
          Tobias Scherf<br />
          Klosterstraße<br />
          34414 Warburg<br />
          E-Mail: kontakt@tobias-scherf.de
        </p>

        <h3 className="text-2xl font-semibold mb-4">3. Erhebung und Verarbeitung personenbezogener Daten</h3>
        <p className="mb-4">
          Personenbezogene Daten (z. B. Name, E-Mail-Adresse) werden nur verarbeitet, wenn Sie uns diese freiwillig mitteilen – etwa im Rahmen des Kontaktformulars oder per E-Mail. Diese Daten verwenden wir ausschließlich zur Bearbeitung Ihrer Anfrage. Eine Weitergabe an Dritte erfolgt nicht ohne Ihre ausdrückliche Einwilligung.
        </p>

        <h3 className="text-2xl font-semibold mb-4">4. Kontaktformular</h3>
        <p className="mb-4">
          Wenn Sie uns über das Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Formular inklusive der dort angegebenen Kontaktdaten zur Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.<br />
          Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung oder vorvertragliche Maßnahmen) oder auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
        </p>

        <h3 className="text-2xl font-semibold mb-4">5. Server-Log-Dateien</h3>
        <p className="mb-4">
          Der Provider dieser Seiten erhebt und speichert automatisch Informationen in sogenannten Server-Log-Dateien, die Ihr Browser automatisch übermittelt:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>IP-Adresse</li>
          <li>Datum und Uhrzeit der Anfrage</li>
          <li>Browsertyp und -version</li>
          <li>Verwendetes Betriebssystem</li>
          <li>Referrer-URL</li>
        </ul>
        <p className="mb-4">
          Diese Daten sind nicht bestimmten Personen zuordenbar. Eine Zusammenführung mit anderen Datenquellen wird nicht vorgenommen.
        </p>

        <h3 className="text-2xl font-semibold mb-4">7. Ihre Rechte</h3>
        <p className="mb-2">Sie haben das Recht auf:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)</li>
          <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
          <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
          <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
          <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
          <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
        </ul>
        <p className="mb-4">
          Bitte wenden Sie sich hierzu an: kontakt@tobias-scherf.de
        </p>

        <h3 className="text-2xl font-semibold mb-4">8. SSL-/TLS-Verschlüsselung</h3>
        <p className="mb-4">
          Diese Seite nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie an der Adresszeile Ihres Browsers („https://").
        </p>

        <h3 className="text-2xl font-semibold mb-4">9. Widerspruch gegen Werbe-Mails</h3>
        <p className="mb-4">
          Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen.
        </p>
      </section>
    </main>
  );
} 