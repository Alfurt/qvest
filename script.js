var questNum = 0;
var rightAns = 0;
var phrase = ["anus", "jopa", "asd", "1010101010", "5 б б", "сковречник", "домик для птиц", "в лесу", "карта", "фонарик", "послание", "секрет", "тайна", "свечка", "свеча", "огонь", "карта", "карта и свеча", "карта и свечка", "ничего", "жопа", "туса",];

answer.onclick = function() {
document.getElementById("title").innerHTML = phrase[Math.floor(Math.floor(Math.random() * Math.floor(phrase.length)))];
document.getElementById("answer").innerHTML = "";
document.getElementById("answer").classList.remove("ansWrong");
document.getElementById("but").classList.remove("btnWrong");
};

but.onclick = function()
{
  var btn_text = document.getElementById("but").innerHTML;
  if(btn_text == "Начать")
  {
        document.getElementById("answer").style.visibility = 'visible';
        btn_text = "Дальше »";
  }

  if(btn_text == "Проверить »")
  {
    var ans = document.getElementById("answer").innerHTML.toLowerCase();
    if(ans.trim() == '')
    {
      document.getElementById("answer").focus();
      return;
    }


    var compare;
    // -- Здесь ответы --
    if(questNum == 1)
    {
      compare = ["свечка", "свеча", "огонь", "карта", "карта и свеча", "карта и свечка"];
    }
    else if(questNum == 2)
    {
      compare = ["5 б б"];
    }
    else if(questNum == 3)
    {
      compare = ["ничего"];
    }
    else if(questNum == 4)
    {
      compare = ["письмо", "письмо и свечку", "свечку"];
    }
    else if(questNum == 5)
    {
      compare = ["бутылка", "письмо", "письмо в бутылке", "бутылка вина", "бутылка из-под вина", "бутылка из-под вина с письмом", "послание"];
    }
    else if(questNum == 6)
    {
      compare = ["фонарь", "фонарик","свет", "огонь", "проводник"];
    }
    else if(questNum == 7)
    {
      compare = ["скворечник", "в скворечнике", "кормушка", " в кормушке"];
    }
    else if(questNum == 8)
    {
     compare = ["игорь", "агап", "игорь агапов"];
    }
    else if(questNum == 9)
    {
     compare = ["шкатулка", "в шкатулке", "в лесу", "в лесу в шкатулке", "шкатулка в лесу", "в шкатулке в лесу", "в лесу шкатулка", "сундук", "в сундуке", "сундучек", "сундучок", "в сундучке"];
    }
    // -- Конец ответов --

    // Проверка ответа
    var b = false;
    for(var i in compare)
    {
      if(ans == compare[i]) b = true;
    }

    if(b)
    {
      document.getElementById("answer").classList.remove("ansWrong");
      document.getElementById("but").classList.remove("btnWrong");
      document.getElementById("title").innerHTML = "Правильно!";
      document.getElementById("answer").classList.add("ansRight");
      document.getElementById("but").classList.add("btnRight");
      rightAns++;
       document.getElementById("answer").contentEditable = false;
    document.getElementById("but").innerHTML = "Дальше »";

    }
    else
    {
      document.getElementById("title").innerHTML = "Неправильно...";
      document.getElementById("answer").classList.add("ansWrong");
      document.getElementById("but").classList.add("btnWrong");

    }
    // Конец проверки
  }
  else if(btn_text == "Дальше »")
  {
    // Переход на следующий вопрос
    questNum++;
    document.getElementById("title").innerHTML = "Вопрос #"+questNum;
    document.getElementById("answer").contentEditable = true;
    document.getElementById("answer").innerHTML = "";
    document.getElementById("answer").classList.remove("ansRight");
    document.getElementById("answer").classList.remove("ansWrong");
    document.getElementById("but").innerHTML = "Проверить »";
    document.getElementById("but").classList.remove("btnRight");
    document.getElementById("but").classList.remove("btnWrong");
    document.getElementById("answer").focus();

    // -- Здесь все вопросы
    if(questNum == 1)
    {
      document.getElementById("quest").innerHTML = "проверь почту. там огонь. что это?"
      document.getElementById("pic").src = "https://giffiles.alphacoders.com/811/81186.gif";
    }
    else if(questNum == 2)
    {
      document.getElementById("quest").innerHTML = "Код - 2 е е. Зеркально, но не так просто. Введи код";
      document.getElementById("pic").src = "https://i.giphy.com/media/k3pyeP3G3UWI/giphy.webp";
    }
    else if(questNum == 3)
      {
        document.getElementById("quest").innerHTML = "Поднимись на пятый. Там есть что-то интересное?";
        document.getElementById("pic").src = "https://i.gifer.com/Wex1.gif";
      }
      else if(questNum == 4)
        {
          document.getElementById("quest").innerHTML = "Иди дальше наверх. Нашел?";
          document.getElementById("pic").src = "http://s1.favim.com/orig/150917/black-dark-darkness-fog-Favim.com-3310940.gif";
        }
        else if(questNum == 5)
          {
            document.getElementById("quest").innerHTML = "Что-то у озера. Что это?";
            document.getElementById("pic").src = "https://media.giphy.com/media/1Pq6EZxEQ7sbu/giphy.gif";
          }
          else if(questNum == 6)
            {
              document.getElementById("quest").innerHTML = "Какой подарок лежит под елкой?";
              document.getElementById("pic").src = "https://i.gifer.com/6Kn2.gif";
            }
            else if(questNum == 7)
              {
                document.getElementById("quest").innerHTML = "Где живут птицы?";
                document.getElementById("pic").src = "https://i.giphy.com/media/rAbKGNGM99DBC/giphy.webp";
              }
              else if(questNum == 8)
                {
                  document.getElementById("quest").innerHTML = "Кто жопа?";
                  document.getElementById("pic").src = "https://99px.ru/sstorage/86/2016/04/image_862504162207448079252.gif";
                }
    else if(questNum == 9)
                {
                  document.getElementById("quest").innerHTML = "Где спрятан секрет?";
                  document.getElementById("pic").src = "https://gifimage.net/wp-content/uploads/2018/11/dark-creepy-gif-4.gif";
                }
                // Конец вопросов
    else
    {
      // Финал
      document.getElementById("title").innerHTML = "Отлично";
      document.getElementById("quest").innerHTML = "Вы выжили";
      document.getElementById("pic").src = "https://i.gifer.com/1pXC.gif";

      document.getElementById("answer").style.visibility = 'hidden';
      document.getElementById("but").innerHTML = "кк";
    }
  }
  else if(btn_text == "кк")
  {
    // Перезапуск
    close();
  }
}
