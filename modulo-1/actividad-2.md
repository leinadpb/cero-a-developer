## La "terminal" o "CMD"
--
Nos permitirá avanzar más rápido en el curso al poder manipular mejor nuestro computador con la terminal.

Veamos algunos comando muy útiles:

*Nota:* Cuando veas algo como `<ALGO_AQUI_DENTRO>` significa que es un placeholder que puedes sustituir con algo personal. Por ejemplo: `<MI_NOMBRE>`, lo puedo sustituir por `DANIEL PENA`.

- Navegación de Directorios:
Windows: `cd`, `dir`
Linux: `cd`, `ls`

- Crear y Eliminar Directorios:
Windows: `mkdir`, `rmdir`
Linux: `mkdir`, `rm -r`

- Crear y Eliminar Archivos:
Windows: `echo > <NOMBRE_ARCHIVO>.txt`, `del <NOMBRE_ARCHIVO>.txt`
Linux: `touch <NOMBRE_ARCHIVO>.txt`, `rm <NOMBRE_ARCHIVO>.txt`

- Copiar y Mover Archivos:
Windows: `copy`, `move`
Linux: `cp`, `mv`

- Ver Contenido de Archivos:
Windows: `type`
Linux: `cat`

- Editar Archivos de Texto:
Windows: `notepad`, `edit`
Linux: `nano`, `vim`

- Información del Sistema:
Windows: `systeminfo`
Linux: `uname -a`


Ahora practiquemos:

**Ejercicio**: _Navegación y Manipulación de Archivos_
En este ejercicio, aprenderás a navegar por tu sistema de archivos, crear y eliminar directorios, así como crear y eliminar archivos.

**Pasos:**
1. Abrir la Terminal o CMD:
_En Windows_: Abre el menú de inicio, busca **cmd** y haz clic en **Símbolo del sistema**.
_En Linux_: Abre el **terminal** desde el menú de aplicaciones o usa el atajo de teclado **Ctrl + Alt + T**.

2. Navegación de Directorios:
_Windows_: Escribe `cd` seguido de la ruta del directorio al que deseas navegar. Usa `dir` para ver el contenido del directorio.
_Linux_: Escribe `cd` seguido de la ruta del directorio al que deseas navegar. Usa `ls` para ver el contenido del directorio.

3. Crear un Directorio:
Escribe `mkdir ejemplo_dir` para crear un directorio llamado __ejemplo_dir__.

4. Navegar al Nuevo Directorio:
Usa el comando `cd ejemplo_dir` para ingresar al directorio que acabas de crear.

5. Crear un Archivo de Texto:
_Windows_: Escribe `echo "Hola, Mundo!" > ejemplo.txt` para crear un archivo de texto llamado __ejemplo.txt__ con el contenido "Hola, Mundo!".
_Linux_: Escribe `echo "Hola, Mundo!" > ejemplo.txt` para hacer lo mismo.

6. Verificar la Creación del Archivo:
Utiliza `dir` en _Windows_ o `ls` en _Linux_ para ver el contenido del directorio y verificar que "ejemplo.txt" se ha creado.

7. Ver el Contenido del Archivo:
Escribe `type ejemplo.txt` en _Windows_ o `cat ejemplo.txt` en _Linux_ para ver el contenido del archivo que acabas de crear.

8. Eliminar el Archivo y el Directorio:
Utiliza `del ejemplo.txt` en _Windows_ o `rm ejemplo.txt` en _Linux_ para eliminar el archivo.

Luego, utiliza `cd ..` para regresar al directorio anterior y `rmdir ejemplo_dir` en _Windows_ o `rm -r ejemplo_dir` en _Linux_ para eliminar el directorio.