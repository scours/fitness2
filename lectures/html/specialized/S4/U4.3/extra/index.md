![FITNESS](./src/image1.png)

# MIGRATION FROM MULTILAYER MATERIALS

[TOC]

## Functional barriers

Text from EU regulation [10/2011/EC](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32011R0010&from=FR)

> (27) **In recent years plastic food contact materials are being developed that do not only consist of one plastic but combine up to 15 different plastic layers to attain optimum functionality and protection of the food**, while reducing packaging waste. In such a plastic multi-layer material or article, layers may be separated from the food by a functional barrier. ==This barrier is a layer within food contact materials or articles preventing the migration of substances from behind that barrier into the food==. 
>
> **Behind a functional barrier, non-authorised substances may be used,** *provided they fulfil certain criteria and their migration remains below a given detection limit*. Taking into account foods for infants and other particularly susceptible persons, as well as the large analytical tolerance of the migration analysis, a maximum level of 0,01 mg/kg in food should be established for the migration of a non-authorised substance through a functional
> barrier. ==Substances that are mutagenic, carcinogenic or toxic to reproduction should not be used in food contact materials or articles without previous authorisation and should therefore not be covered by the functional barrier concept==. New technologies that engineer substances in particle size that exhibit chemical and physical properties that significantly differ from those at a larger scale, for example, nanoparticles, should be assessed on a case-by-case basis as regards their risk until more information is known about such new technology. Therefore, they should  not be covered by the functional barrier concept.

Comparatively to [monolayer materials](), Kinetics are not necessarily **homothetic** but they can be sill compared for a same *Fourier time* if a reference layer.

> | Property    | description                                                  | SI units          |
> | ----------- | ------------------------------------------------------------ | ----------------- |
> | $t$         | contact time                                                 | $s$               |
> | $D_{i,ref}$ | diffusion coefficient (in the reference layer)               | $m^2\cdot s^{-1}$ |
> | $l_{ref}$   | wall thickness ==of the reference layer== (do not choose the functional barrier ($fb$) as reference layer, if you want to compare with and without $fb$) | $m$               |


$$
Fo = \frac{D_{i,ref}\cdot t}{l_{ref}^2}=\int^t_0\frac{D_{i,ref} \left(T(t)\right) }{l_{ref}^2}dt
$$

### 3D description

> The functional barrier ($fb$) is made from the same material as the reference one ($ref$). In other words, the migrant is distributed uniformly in the reference layer and absent in the $fb$

<button type="button" onclick='showit("im1");'>show</button>
<img src="./src/bottle_fb.gif" id="im1" style="zoom:80%;visibility: hidden;"/>



## True Multilayer materials

> Layers $j=1\dots m$ have different properties. It is convenient to choose $j=0$ for the food and to index $k=1$ the layer in contact with food.
>
> | concentration of substance $i$ in layer $j$ | Henry-like coefficient of substance $i$ in layer $j$ | Diffusion coefficient of substance $i$ in layer $j$ |
> | ------------------------------------------- | ---------------------------------------------------- | --------------------------------------------------- |
> | $C_{i,j}$                                   | $k_{i,j}=K_{i,F/j}$  when  $k_0=1$                   | $D_{i,j}$                                           |
>
> Henry-like coefficients relate the partial pressure of the substance $i$ in layer $j$, denoted $p_{i,j}$ with its local concentration $C_{i,j}$ as:
> $$
> p_{i,j}=k_{i,j}C_{i,j}
> $$
> The partition coefficient between the layer $j_1$ and $j_2$ can be expressed with $k_{i,j}$ values by noting that partial pressures are equal at thermodynamical equilibrium ($p_{i,j_1}^{eq}=p_{i,j_2}^{eq}$):
> $$
> K_{i,\frac{j_1}{j_2}}=\frac{C_{i,j_1}^{eq}}{C_{i,j_2}^{eq}}==\frac{k_{i,j_2}}{k_{i,j_1}}
> $$
> Choosing arbitrarily $k_0$=1 enables to identify all Henry-like coefficients with the partition coefficient with food $K_{i,\frac{F}{j}}=k_{i,j}$.

### Overview

<button type="button" onclick='showit("im2");'>show</button>
<img src="./src/bottle_multi.gif" id="im2" style="zoom:80%;visibility: hidden;"/>


### Migration kinetics are more complex than in monolayer cases

- [x] delayed kinetics
- [ ] slowed kinetic
- [ ] non-monotonic behavior

> Concentration profiles

<button type="button" onclick='showit("im3");'>show</button>
<img src="./src/S1_functional_barrier_on.gif" id="im3" style="visibility: hidden;"/>

> Migration kinetics

<button type="button" onclick='showit("im4");'>show</button>
<img src="./src/mig2d_0.gif" id="im4" style="zoom:80%;visibility: hidden;"/>

------

- [x] delayed kinetics
- [x] slowed kinetics
- [ ] non-monotonic behavior

<button type="button" onclick='showit("im5");'>show</button>
<img src="./src/S2_solub_functional_barrier_on.gif" id="im5" style="visibility: hidden;"/>

------

- [x] delayed kinetics
- [x] slowed kinetics
- [x] non-monotonic behavior

<button type="button" onclick='showit("im6");'>show</button>
<img src="./src/image267.gif" id="im6" style="visibility: hidden;"/>


### Equilibrium concentrations
$$
C_{F}^{eq}=C_{0}^{t\to \infty }=\frac{\sum\limits_{j=0}^{m}{\frac{{{l}_{j}}}{{{l}_{0}}}C_{j}^{t=0}}}{1+\sum\limits_{j=1}^{m}{\frac{{{k}_{0}}}{{{k}_{J}}}\frac{{{l}_{j}}}{{{l}_{0}}}}}
$$

## Conservative assumptions for risk assessment

> *General principles*
>
> Since all equations are linear with concentrations, ==the solution associated to $m$ layers is the sum of $m$ solutions where only one layer is initially formulated at a time==. The sum can be constructed in a way that a conservative solution is calculated with less unknowns.
>
> - A layer indexed $m\geq r>j$ is called $reservoir$ if it is behind the formulated layer $j$  (*i.e.* it can be safely removed or it is always safe to assume $k_r\rightarrow\infty$).
> - A layer indexed $1\leq fb<j$ is called $functional\;barrier$ when it is located  in front of the layer $j$ (*i.e.* it cannot be removed, but it always safe to consider $k_{fb}\leq k_j$)
> - Sequential simulation (for different initial solutions) or the construction of a conservative initial solution enables to construct first tier scenarios even in presence of strong uncertainty on partition coefficients.

### Removing reservoir layers

<button type="button" onclick='showit("im789");'>show</button>

<table id="im789" style="visibility: hidden;"><tr><th>reality</th><th>conservative</th><th>even more conservative</th></tr><tr><td><img src='./src/demo3d_0.gif' style="zoom:50%;" /></td><td><img src='./src/demo3d_1.gif' style="zoom:50%;" /></td><td><img src='./src/demo3d_2.gif' style="zoom:50%;" /></td></tr></table>
### Changing chemical potentials

<button type="button" onclick='showit("im10");'>show</button>

<table id="im10" style="visibility: hidden;"><tr><th>reality</th><th>conservative</th><th>even more conservative</th></tr><tr><td><img src='./src/demo3d_3.gif' style="zoom:50%;" /></td><td><img src='./src/demo3d_4.gif' style="zoom:50%;" /></td><td><img src='./src/demo3d_5.gif' style="zoom:50%;" /></td></tr></table>
### Examples: trilayer AbC

<button type="button" onclick='showit("im11");'>show</button>
<img src="./src/mig2d_3.gif" id="im11" style="visibility: hidden;"/>

### Refined scenarios: trilayer AbC

<button type="button" onclick='showit("im12");'>show</button>
<img src="./src/mig2d_4.gif" id="im12" style="visibility: hidden;"/>

------
<table><tr><td><img src='./src/image3.png'/></td><td><img src='./src/image2.png' /></td></tr></table>
<script>
function showit(myimage) {
var h = document.getElementById(myimage);
if (h.style.visibility =="visible") {
	h.style.visibility="hidden";
}  else {
	h.style.visibility="visible";
}
}
</script>