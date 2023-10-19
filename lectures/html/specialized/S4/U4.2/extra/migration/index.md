![FITNESS](./src/image1.png)

# MIGRATION FROM MONOLAYER MATERIALS

[TOC]

## What is migration?

> **Migration is the macroscopic process associated the net displacements of "contaminants" or 'migrants"** from one compartment to another one *without consideration of the physical nature of the displacements* (through the solid, liquid, gas phase; the considered temperature and history of mass transfer).

<button type="button" onclick='showit("im1");'>show</button>
<img src="./src/CHAPTER02_prezi4.gif" id="im1" style="visibility: hidden;"/>



## Example of of migrants: $i$

<button type="button" onclick='showit("im23");'>show</button>

<table id="im23" style="visibility: hidden;"><tr><td><img src='./src/BC1.gif' style="zoom:33%;" /></td><td><img src='./src/RC1.gif' style="zoom:33%;" /></td></tr></table>
## Dimensionless time and migration kinetics

> | Property  | description                            | SI units          |
> | --------- | -------------------------------------- | ----------------- |
> | $t$       | contact time                           | $s$               |
> | $D_{i,P}$ | diffusion coefficient (in the polymer) | $m^2\cdot s^{-1}$ |
> | $l_p$     | wall thickness                         | $m$               |
>

All migration kinetics are **homothetic** to dimensionless time or *Fourier time*:
$$
Fo = \frac{D_{i,P}\cdot t}{l_p^2}=\int^t_0\frac{D_{i,P} \left(T(t)\right) }{l_p^2}dt
$$
------

<button type="button" onclick='showit("im4");'>show</button>
<img src="./src/bottle_monolayer.gif"  id="im4" style="zoom: 80%;visibility: hidden;" />

------

> Migration can occurs at any time.
>

<button type="button" onclick='showit("im5");'>show</button>
<img src="./src/CHAPTER05_prezi5.gif" id="im5" style="visibility: hidden;"/>

------


##  1D approximation and dimensionless mass balance

> | Property                                      | description                                                  | SI units         |
> | --------------------------------------------- | ------------------------------------------------------------ | ---------------- |
> | $L_{P/F}=\frac{V_P}{V_F}=\frac{l_P}{l_F}$     | dilution ratio or polymer-to-food ratio; ratio of thicknesses in **1D approximation description of mass transfer** with implicit food | $-$              |
> | $K_{i,F/P}=\frac{C_{i,F}^{eq}}{C_{i,P}^{eq}}$ | partition coefficient (food-to-polymer) with concentrations in *food* ($F$) and in the *polymer* ($P$) expressed in $kg\cdot m^{-3}$ or in $mol\cdot m^{-3}$ | $-$              |
> | $V_P=\frac{m_P}{\rho_P}$                      | volume of the packaging estimated from the mass of the polymer $m_P$ and the polymer density $\rho_P$ | $m^3$            |
> | $V_F=\frac{m_F}{\rho_F}$                      | volume of the food (as read on specifications, by filling it with water, etc.) | $m^3$            |
> | $l_F=\frac{V_F}{A}$                           | equivalent food dimension                                    | $m$              |
> | $C_{i,F}$                                     | concentrations in the *food* ($F$)                           | $kg\cdot m^{-3}$ |
> | $C_{i,P}$                                     | concentrations in  the*polymer* ($P$)                        | $kg\cdot m^{-3}$ |

### Total migration and large partition coefficient $K_{i,F/P}=50$

<button type="button" onclick='showit("im6");'>show</button>
<img src="./src/k1_50.gif" id="im6" style="visibility: hidden;"/>

### Limited migration in food $K_{i,F/P}=\frac{1}{50}$

<button type="button" onclick='showit("im7");'>show</button>
<img src="./src/k50.gif" id="im7" style="visibility: hidden;"/>

### Maximum concentration in food: $C_{i,F}^t\leq C_{i,F}^{eq}$

$$
C_{i,F}^{eq}=\frac{C_{i,P}^{t=0}}{\frac{1}{K_{i,F/P}}+\frac{1}{K_{P/F}}}
$$



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
