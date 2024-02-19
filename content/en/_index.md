+++
archetype = "home"
title = "Level Lake Constance (Bodensee)"
+++

{{% notice style="primary" title="Please note" icon="skull-crossbones" %}}
This website is under construction
{{% /notice %}}

<h2>Level Lake Constance: <span id=website_current_level_head> ? </span></h2>

The current level of Lake Constance is: <b><span id=website_current_level> ? </span></b> cm (<b><span id=website_change_vs_yesterday> ? </span></b> cm compared to the average of the previous day).

The data was last updated on <span id=website_mostrecent_date> ? </span> at <span id=website_mostrecent_time> ? </span>.



## Development over the last 10 days

This is how the level of the lake developed over the last ten days:

![level_current](https://pegel-konstanz-for-website.s3.eu-central-1.amazonaws.com/graph/EN/current_EN.png)


## Forecast

The forecast below is a direct copy from the [website of the Landesanstalt für Umwelt Baden-Württemberg](https://www.hvz.baden-wuerttemberg.de/pegel.html?id=00007) (LUBW).

As this graph is graph is only available in German, we add an English translation here:

**Legend:**
* <span style="color:blue">Blue Line </span> = Measured water level of Lake Constance
* <span style="color:red">Red Line</span> = Forecast
* <span style="background-color: #FFFF00">Yellow Area</span> = Range of Estimation
* Black Line = Scenario: No Precipitation for the next ten Days

![forecast_level_lake_constance](https://www.hvz.baden-wuerttemberg.de/gifs/00007-2001.GIF)



## Annual Cycle

The annual cycle in comparison to historical values is given here. The <span style="background-color: lightgrey"> grey area</span> of the error band can be interpreted as the 'normal' fluctuation of the level.

![level_longterm](https://pegel-konstanz-for-website.s3.eu-central-1.amazonaws.com/graph/EN/longterm_EN.png)


## Clearence Hight for Bridges

With a current level of <span id=website_current_level_bridge> ? </span> cm, the clearence hight in Konstanz is

<ul>
  <li>Left: <b><span id=website_bridge_kn_left> ? </span></b> cm</li>
  <li>Center: <b><span id=website_bridge_kn_center> ? </span></b> cm</li>
  <li>Right: <b><span id=website_bridge_kn_right> ? </span></b> cm</li>
</ul>


{{< read_current_json >}} 