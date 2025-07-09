+++
archetype = "home"
title = "Level of Lake Constance (Bodensee)"
+++

<h2>Level of Lake Constance: <span id=website_api_current_level_head>...</span> (<span id=website_api_change_vs_yesterday_head>...</span>) </h2>

The current level of Lake Constance (station Constance) is: <b><span id=website_api_current_level>...</span></b> cm. Corresponding <b><span id=website_api_change_vs_yesterday>...</span></b> cm compared to the average of the previous day.

The data was last updated at <b><span id=website_api_mostrecent_time>...</span></b> CET on <span id=website_api_mostrecent_date>...</span>.

{{% notice style="orange" title="Info 2025-07-08" icon="info" %}}
The level of Lake Constance is extraordinary low right now. Comparing the average level of 339 cm yesterday (07/08) to historic data, there were two years (1.5%) since 1888 during which the level was equal or lower that it is right now (in descending order): [1949](https://www.pegel-konstanz.de/en/01_historische_daten/1940-1949/index.html#1949) (330 cm), [1976](https://www.pegel-konstanz.de/en/01_historische_daten/1970-1979/index.html#1976) (322 cm).
{{% /notice %}}

## Development over the last 10 days

This is how the level of the lake developed over the last ten days:

![level_current](https://pegel-konstanz-for-website.s3.eu-central-1.amazonaws.com/graph/current/en/current_EN.png)

Current Value: <b><span id=website_api_current_level_d1>...</span></b> cm

Change **24h**: <b><span id=website_api_change_24h>...</span></b> cm

Change **72h**: <b><span id=website_api_change_72h>...</span></b> cm

Change **10d**: <b><span id=website_api_change_10d>...</span></b> cm

## Forecast

The forecast below is a direct copy from the [website of the Landesanstalt für Umwelt Baden-Württemberg](https://www.hvz.baden-wuerttemberg.de/pegel.html?id=00007) (LUBW). As all data on this website, also the LUBW data is given without guarantee.

As this graph is only available in German, we add an English translation here:

![forecast_level_lake_constance](https://www.hvz.baden-wuerttemberg.de/gifs/00007-2001.GIF)

**Legend:**
* <span style="color:blue">Blue Line </span> = Measured water level of Lake Constance
* <span style="color:red">Red Line</span> = Forecast
* <span style="background-color: #FFFF00">Yellow Area</span> = Range of Estimation
* Black Line = Scenario: No Precipitation for the next ten Days

## Annual Cycle

The annual cycle in comparison to historical values.

![level_longterm](https://pegel-konstanz-for-website.s3.eu-central-1.amazonaws.com/graph/longterm/en/longterm_EN.png)

## Clearance Height for Bridges

With a current level of <span id=website_api_current_level_bridge>...</span> cm, the clearence height in Constance (Konstanz) is

<ul>
  <li>Left: <b><span id=website_api_bridge_kn_left>...</span></b> cm</li>
  <li>Center: <b><span id=website_api_bridge_kn_center>...</span></b> cm</li>
  <li>Right: <b><span id=website_api_bridge_kn_right>...</span></b> cm</li>
</ul>


{{< read_api_current_json >}} 
