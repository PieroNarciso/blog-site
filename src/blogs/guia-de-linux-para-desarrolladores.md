---
slug: "/blog/guia-de-linux-para-desarrolladores"
date: "2021-04-18"
description: "Linux (GNU/Linux) es indiscutiblemente el sistema operativo usado en los servidores alrededor del mundo. Teniendo el mayor market share. Por lo tanto, nosotros como desarrolladores comunmente estaremos despegando aplicativos web, APIs, y otros servicios a la nube que lo más probable es que esté corriendo alguna distribución de linux."
keywords: "linux,entorno de escritorio,desarrollador,developer,ubuntu,arch linux"
title: "Guía de Linux para desarrolladores"
---

Linux (GNU/Linux) es indiscutiblemente el sistema operativo usado en los servidores alrededor del mundo. Teniendo el mayor "market share". Por lo tanto, nosotros como desarrolladores comunmente estaremos despegando aplicativos web, APIs, y otros servicios a la nube que lo más probable es que esté corriendo alguna `distribución` de linux.

## ¿Qué beneficios trae desarrollar en Linux?

1. Desarrollar en un entorno similar al de producción. Por lo anteriormente mencionado, en un entorno de producción es más común que sea un sistema operativo basado en Linux el que esté corriendo.
2. Tener libertad completa de customizar el sistema operativo para que pueda adaptarse a tu flujo de trabajo y que no sea al revés.
3. Tener a disposición todas las herramientas que como desarrollador vas a necesitar y que sean de manera complementamente nativa. En muchos casos, las actualizaciones y nuevos "features" son implementados primeros para Linux, que para Windows.
4. Una "terminal" (shell) poderosa por defecto. Bash y los otros shells disponibles como: Zsh, Fish. Son más capaces y más intuitivos que los que vienen en Windows (cmd, powershell).
5. Linux está libre de `spyware`, software que monitorea el uso del sistema operativo y envía información a los servidores para analizar tu comportamiento.

## ¿Qué es una distribución de Linux distro?

A comparación de lo que puede ser Windows o OSx, Linux no es un sistema operativo como tal, es solo un kernel que vendría a ser la base de un sistema operativo. Una distro está compuesto por este kernel (quizá modificado por quien hace la distribución) y una serie de librerías y herramientas `GNU`. Además de ello puede contener o no software adicional pre-instalado.

Las distros más populares son las siguientes:

1. Debian
2. Ubuntu
3. Linux Mint
4. Pop OS
5. MX Linux
6. Fedora
7. OpenSuse
8. Manjaro
9. Arch Linux

En lo personal, recomiendo comenzar con Pop OS, o una distribución basado en <a href="https://ubuntu.com/download/flavours" target="_blank">Ubuntu/Debian</a> como: Linux Mint, MX Linux, u otros que no son mencionados en este post. Esto debido a que Pop OS, en caso se tenga una gráfica Nvidia, ya viene con los drivers en la instalación. Además, como es basado en Ubuntu, tiene bastante información útil por la comunidad; ya que, Ubuntu es la distro más usada actualmente.

## ¿Qué es un gestor de paquetes?

La instalación de un software común en Linux, es muy diferente a una en Windows. En Windows normalmente si quieres instalar algo, vas hacia la página oficial del distribuidor del software, lo descargas y luego procedes a hacer los pasos del instalador para dicho software. En Linux esto es diferente, cada distribución viene con un `gestor de paquetes`, que se encarga de la instalación, gestión y mantenimiento de los softwares pre-instalados o instalados por el usuario. Depende de la distribución, este gestor de paquetes puede estar disponible o no mediante una interfaz gráfica.

Ejemplo de instalación de firefox en Ubuntu y Arch Linux por linea de comando:

* Ubuntu:
```bash
$ sudo apt install firefox
```

* Arch Linux:
```bash
$ sudo pacman -S firefox
```

## ¿Qué es un entorno de escritorio?

Un entorno de escritorio vendría a ser una colección de software que en conjunto tratan de mejorar la experiencia del usuario. Las características más básicas de un entorno de escritorio son: como las ventanas interactuan entre sí. Esto va desde cómo se ve la interfaz como: la interacción de las ventanas, la apariencia de las ventanas, cursor, íconos, directorios; hasta los aplicativos que componen las características más básicas, como la barra de tarea, la interfaz de configuraciones, explorador de archivos, editores y procesadores de texto, etc. En contraste con Windows y OSx en donde el entorno de escritorio oficial es uno solo; en Linux, existen muchos de estos entornos de escritorios y cada uno se puede caracterizar su "modularidad". Es decir, el usuario final es quien decide qué aplicativos y entorno de escritorio va a usar y necesitar.

Los entornos de escritorio más populares en Linux son:

* Cinnamon
* Gnome
* KDE Plasma
* LXDE
* MATE
* Xfce
* Pantheon

Gnome es el entorno de escritorio más popular y es el que viene por defecto en muchas distrubuciones como Fedora, Ubuntu, Zorin OS, etc. Dista mucho del modelo tradicional con el que trae Windows 10. Los entornos de escritorio que tienen un mayor parecido a este último sin ninguna configuración extra, son MATE, Xfce y KDE.

## ¿Debería pasarme a Linux?

En caso seas desarrollador web o alguien que hace desarrollo para multiples plataformas, las posibilidades que tengas un mejor entorno y experiencia al desarrollar, son altas. Además, con un poco de esfuerzo extra, tengas un mejor flujo de trabajo, incrementes tu productividad y a la vez tengas un conocimiento más sólido sobre sistemas operativos.

Por otro lado, si dependes mucho de software, como el suit de Adobe o Microsoft Office y las alternativas de software libre no se adaptan a tus necesidades, tendrás que esperar un tiempo más hasta que puedan estar disponibles en Linux a través de <a href="https://winehq.org" target="_blank">wine</a>.

Sea una u otra la situación, te invito a probar una distribución de Linux, en una computadora antigua o nueva, o incluso desde un mismo USB y experimentes la `experiencia Linux`.
