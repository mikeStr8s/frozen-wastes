<%*
const title = await tp.system.prompt("What is the Title?");
const name = title.toLowerCase().split(" ").join("-");

const population = await tp.system.prompt("What is the population?");

const friendliness = '❄'.repeat(await tp.system.prompt("How friendly is it to outsiders? (1-3)"));
const services = '❄'.repeat(await tp.system.prompt("How abundant are goods and services? (1-3)"));
const comfort = '❄'.repeat(await tp.system.prompt("How comfortable is it to be here? (1-3)"));
%>
# <%title%>

![<%title%>](../../img/<%name%>.webp)

## In a Nutshell

- **Friendliness** <%friendliness%>**Services** <%services%>**Comfort** <%comfort%>
- **Population**: 150
- **Leaders**:

## Heraldry

description

![<%title%> Heraldry](../../img/shield-<%name%>.webp){: .m-image }

## Connections

description

### Overland Travel from <%title%>

| To         | Travel Time |
| ---------- | ----------- |
|            | X hours     |


### Locations in <%title%>

- [location]()