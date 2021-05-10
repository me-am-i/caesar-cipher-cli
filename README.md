## caesar-cipher-cli

Для запуска выполните команду

```$ node tool <action> <shift> <input> <output> ```

Аргументы:
1. action: **-a** (или **--action**) **encode** (или **decode**) - для кодирования/декодирования соответственно; _обязательный параметр_
2. shift: **-s** (или **--shift**) **n** - шаг смещения, где _n_ целое число; _обязательный параметр_
3. input: **-i** (или **--input**) **"путь_файла/имя_входного_файла.txt"** - файл для чтения данных; _опционально, если не указано - ожидает ввод с клавиатуры_
4. output: **-o** (или **--output**) **"путь_файла/имя_выходного_файла.txt"** - файл для вывода данных; _опционально, если не указано - выводит на экран_

###### Примеры:
```$ node tool -a encode -s 3 -i "./input.txt" -o "./output.txt"```

```$ node tool --action encode --shift 3 --input input.txt --output output.txt```


####Для установки выполните в терминале команды:

1. ```$ git clone git@github.com:me-am-i/caesar-cipher-cli.git``` 
2. ```$ cd caesar-cipher-cli/``` 
3. ```$ npm install```
