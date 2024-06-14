+++
archetype = "home"
title = "Level of Lake Constance (Bodensee)"
+++

<h2>Level of Lake Constance: <span id=website_current_level_head> ? </span> (<span id=website_change_vs_yesterday_head> ? </span>) </h2>

The current level of Lake Constance (station Constance) is: <b><span id=website_current_level> ? </span></b> cm. Corresponding <b><span id=website_change_vs_yesterday> ? </span></b> cm compared to the average of the previous day.

The data was last updated on <span id=website_mostrecent_date> ? </span> at <span id=website_mostrecent_time> ? </span>.

## Development over the last 10 days

This is how the level of the lake developed over the last ten days:

![level_current](https://pegel-konstanz-for-website.s3.eu-central-1.amazonaws.com/graph/EN/current_EN.png)

{{% notice style="note" title="Current information (2024-06-12)" icon="info" %}}
At the moment, a comparison with the water level in 2016 is necessary, as it was the last high water event. At that time, the water level rose to 513 cm on June 20 and 21.
The annual course for 2016 can be found [here]({{% relref "01_historische_daten/2010-2019.en.md#2016" %}}).

All annual courses can be found in the menu under [Historical water levels]({{% relref "01_historische_daten/_index.en.md" %}}).
{{% /notice %}}

## Forecast

The forecast below is a direct copy from the [website of the Landesanstalt für Umwelt Baden-Württemberg](https://www.hvz.baden-wuerttemberg.de/pegel.html?id=00007) (LUBW). As all data on this website, also the LUBW data is given without guarantee.

As this graph is only available in German, we add an English translation here:

**Legend:**
* <span style="color:blue">Blue Line </span> = Measured water level of Lake Constance
* <span style="color:red">Red Line</span> = Forecast
* <span style="background-color: #FFFF00">Yellow Area</span> = Range of Estimation
* Black Line = Scenario: No Precipitation for the next ten Days

![forecast_level_lake_constance](https://www.hvz.baden-wuerttemberg.de/gifs/00007-2001.GIF)



## Annual Cycle

The annual cycle in comparison to historical values. The <span style="background-color: lightgrey">grey area</span> of the error band can be interpreted as the 'normal' fluctuation of the level.

![level_longterm](https://pegel-konstanz-for-website.s3.eu-central-1.amazonaws.com/graph/EN/longterm_EN.png)



## Clearance Height for Bridges

With a current level of <span id=website_current_level_bridge> ? </span> cm, the clearence height in Constance (Konstanz) is

<ul>
  <li>Left: <b><span id=website_bridge_kn_left> ? </span></b> cm</li>
  <li>Center: <b><span id=website_bridge_kn_center> ? </span></b> cm</li>
  <li>Right: <b><span id=website_bridge_kn_right> ? </span></b> cm</li>
</ul>


{{< read_current_json >}} 