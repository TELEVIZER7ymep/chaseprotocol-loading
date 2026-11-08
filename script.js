(function(){
  var scenes=[
    ["НЕ ОГЛЯДЫВАЙСЯ","Некоторые вещи замечают тебя раньше, чем ты их."],
    ["ОБЪЕКТ ЗАКРЫТ","Последний сигнал из лаборатории был отправлен три часа назад."],
    ["ТИШИНА ОБМАНЧИВА","Если не слышишь монстра — это ещё не значит, что его нет."],
    ["ПРОВЕРЬ СНАРЯЖЕНИЕ","Подготовка заканчивается быстро. Ошибки остаются надолго."],
    ["КАМЕРЫ НЕ ВРУТ","Но иногда они показывают то, чего здесь быть не должно."],
    ["ОХОТА НАЧИНАЕТСЯ","Держись команды и не трать патроны впустую."],
    ["СВЕТ НЕ СПАСАЕТ","Фонарик помогает видеть. И помогает увидеть тебя."],
    ["НЕ ЗАДЕРЖИВАЙСЯ","Если дверь открыта — это не обязательно приглашение."],
    ["ПРОТОКОЛ АКТИВЕН","Система наблюдения восстановлена частично."],
    ["ПОСЛЕДНИЕ ДВЕ МИНУТЫ","Когда музыка меняется, пора перестать медлить."],
    ["ЗДЕСЬ КТО-ТО БЫЛ","Следы свежие. Очень свежие."],
    ["НЕ ВЕРЬ ТИШИНЕ","Некоторые угрозы не издают ни звука."],
    ["ЗОНА НЕ СТАБИЛЬНА","Ожидай случайную погоду и плохую видимость."],
    ["СОХРАНЯЙ ДИСТАНЦИЮ","Не стойте всей командой в одном проходе."],
    ["ПРОВЕРЬ УГЛЫ","Самая короткая дорога не всегда самая безопасная."],
    ["СЕРВЕР НЕ ЗАБЫВАЕТ","Твои покупки и прогресс сохраняются между раундами."],
    ["НЕ ОТСТАВАЙ","Одинокая цель — лёгкая цель."],
    ["СЛЕДУЮЩИЙ РАУНД БЛИЗКО","Используй перерыв, чтобы подготовиться."],
    ["СЕКТОР НЕ ОТВЕЧАЕТ","Возможно, так даже лучше."],
    ["УДАЧИ, ВЫЖИВШИЙ","Увидимся после раунда. Если повезёт."]
  ];
  var tips=["Проверяй боезапас до начала охоты.","Держись рядом с командой.","Используй укрытия, чтобы пережить погоню.","Тепловизор помогает заметить монстра сквозь стены.","Покупки в снабжении действуют только до конца раунда.","Последние две минуты опаснее всего — не медли.","Не трать гранаты без необходимости.","Слушай окружение: звук может выдать опасность.","Следи за очками снабжения.","После раунда проверь экипировку и выбери оружие."];
  var current=0,tipIndex=0,progress=0;
  var scene=document.getElementById('scene'),title=document.getElementById('sceneTitle'),subtitle=document.getElementById('sceneSubtitle'),tip=document.getElementById('tip');
  function showScene(i){current=i%20;title.textContent=scenes[current][0];subtitle.textContent=scenes[current][1];var n=String(current+1).padStart(2,'0');scene.style.backgroundImage="url('images/scene_"+n+".webp'),linear-gradient(135deg,#171522,#08090d)";}
  function rotate(){showScene(current+1);tipIndex=(tipIndex+1)%tips.length;tip.textContent=tips[tipIndex];}
  setInterval(rotate,30000);showScene(0);
  window.GameDetails=function(servername,serverurl,mapname,maxplayers,steamid,gamemode){document.getElementById('server').textContent=servername||'CHASE PROTOCOL';document.getElementById('map').textContent='КАРТА: '+(mapname||'—').toUpperCase();};
  window.SetFilesTotal=function(total){window.__filesTotal=Math.max(0,Number(total)||0);update();};
  window.SetFilesNeeded=function(needed){window.__filesNeeded=Math.max(0,Number(needed)||0);update();};
  window.DownloadingFile=function(name){document.getElementById('status').textContent='Загрузка: '+(name||'файл');};
  window.SetStatusChanged=function(status){document.getElementById('status').textContent=status||'Подключение...';};
  function update(){var total=window.__filesTotal||0,needed=window.__filesNeeded||0;var value=total>0?Math.round((total-needed)/total*100):progress;progress=Math.max(progress,Math.min(100,value));document.getElementById('bar').style.width=progress+'%';document.getElementById('percent').textContent=progress+'%';if(progress>=100)document.getElementById('status').textContent='Загрузка завершена. Подключаемся...';}
})();
