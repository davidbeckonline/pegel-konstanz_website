+++
archetype = "Home"
title = "Pegel Konstanz (Bodensee)"
+++

{{% notice style="orange" title="Info 2025-07-25" icon="info" %}}
Aktuell gibt es Probleme mit der Aktualisierung der Daten. Das Problem besteht seit Donnerstag, dem 24. Juli 2025 um etwa 22:00 Uhr. Die Ursache liegt in der Datenquelle des LUBW, soweit wir das aktuell sehen können.
{{% /notice %}}

<h2>Pegel Konstanz: <span id="website_api_current_level_head">...</span> (<span id="website_api_change_vs_yesterday_head">...</span>)</h2>

Der aktuelle Pegel des Bodensees (Station Konstanz) beträgt <b><span id="website_api_current_level">...</span></b> cm. Das entspricht <b><span id="website_api_change_vs_yesterday">...</span></b> cm gegenüber des Durchschnittswerts des Vortags.

Diese Daten wurden zuletzt um <b><span id=website_api_mostrecent_time>...</span></b> Uhr aktualisiert (MEZ, <span id=website_api_mostrecent_date>...</span>).

## 10-Tage Trend

Die Entwicklung der letzten zehn Tage:

![level_current](https://pegel-konstanz-for-website.s3.eu-central-1.amazonaws.com/graph/current/de/current_DE.png)

Aktueller Messwert: <b><span id=website_api_current_level_d1>...</span></b> cm

Veränderung **24h:** <b><span id=website_api_change_24h>...</span> </b> cm

Veränderung **72h:** <b><span id=website_api_change_72h>...</span> </b> cm

Veränderung **10d:** <b><span id=website_api_change_10d>...</span> </b> cm

## Vorhersage

Die Vorhersage an dieser Stelle stammt von der [Webseite der Landesanstalt für Umwelt Baden-Württemberg](https://www.hvz.baden-wuerttemberg.de/pegel.html?id=00007) (LUBW). Auch die Angaben des LUBW verstehen sich ohne Gewähr.

![forecast_level_lake_constance](https://www.hvz.baden-wuerttemberg.de/gifs/00007-2001.GIF)


## Jahresverlauf

Der Jahresverlauf im Vergleich zu historischen Werten.

![level_longterm](https://pegel-konstanz-for-website.s3.eu-central-1.amazonaws.com/graph/longterm/de/longterm_DE.png)

## Durchfahrtshöhe Brücken

Mit einem aktuellen Pegel von <span id=website_api_current_level_bridge>...</span> cm beträgt die Durchfahrtshöhe an der Alten Rheinbrücke in Konstanz (flussabwärts)

<ul>
  <li><b>Links: <span id="website_api_bridge_kn_left">...</span></b> cm</li>
  <li><b>Mitte: <span id="website_api_bridge_kn_center">...</span></b> cm</li>
  <li><b>Rechts: <span id="website_api_bridge_kn_right">...</span></b> cm</li>
</ul>

{{< read_api_current_json >}}

<style>
    span a[rel="me"] {
        display: none;
    }
</style>
<span> <a rel="me" href="https://mastodon.social/@pegelkonstanz">Mastodon</a></span>