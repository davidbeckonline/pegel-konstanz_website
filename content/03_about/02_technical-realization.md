+++
title = 'Technische Umsetzung'
date = 2024-01-16T15:26:41Z
draft = false
weight = 2
+++

## Technische Umsetzung

Diese Website wurde auf AWS erstellt und wird auch dort gehostet. Für alle regionalen Dienste wurde die Region eu-central-1 ausgewählt.

![aws_diagramm](/images/general/aws-architecture-diagramm.png)

**Lambda.** Wir verwenden Lambda-Funktionen für zwei Aktivitäten: 1/ Scrapen der Daten. 2/ Verarbeiten und visualisieren Sie die Daten. Die Funktionen werden entweder über den EventsManager oder im Rahmen einer StepFunction ausgelöst.

**ECS.** Die zur Datenverarbeitung und Visualisierung verwendeten Funktionen basieren auf Python/Pandas. Diese Bibliotheken sind zu groß, um als ZIP-Datei hinzugefügt zu werden (die Grenze liegt bei 125 MB). Wir haben daher Docker-Container für diese Funktionen erstellt und sie in ECS gespeichert. Cloud9 wurde verwendet, um die Container zu erstellen.

**EventManager.** Das Scraping der Daten erfolgt regelmäßig. Als Ausgangspunkt scrapen wir ein Mal täglich den durchschnittlichen Wasserstand der vergangenen Tage. Der aktuelle Wasserstand wird derzeit vier Mal täglich abgegriffen.

**S3.** Alle Daten werden in S3 gespeichert. Ein JSON mit dem aktuellen Wasserstand und die PNG-Grafiken mit den neuesten Visualisierungen werden in einem separaten S3-Bucket gespeichert. Die resultierende Website ruft die JSON-Daten und die Grafiken aus diesem Bucket ab.

**Step Functions.** Eine Änderung an einem S3-Standort kann nur als Auslöser für eine Lambda-Funktion dienen. Da wir mehrere Funktionen auslösen müssen, arbeiten wir mit einer geplanten Step-Fiktion.

**Route53.** Wir haben Route53 für die Domainregistrierung verwendet.

**Amplify.** Die Website wurde mit dem HUGO-Framework erstellt. Wir haben das Thema „Neu lernen“ ausgewählt. Das genannte Framework wird von Amplify standardmäßig unterstützt. Im Diagramm wird nicht angezeigt, dass wir Hugo in einer Cloud9-IDE ausführen. Das Git-Repository liegt in CodeCommit.
