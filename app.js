'use strict';

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const text = {
  uz: {
    appName:'Xavfsiz Hayot', demo:'Test rejimi — namoyish uchun sun\'iy ma\'lumotlar', wind:'Jizzax viloyati — kuchli shamol ogohlantirishi', windInfo:'Bugun 18:00–23:00. Ochiq maydonlarda ehtiyot bo\'ling.', locationWeatherLoading:'Joylashuv ob-havosi yuklanmoqda...', locationWeatherUnavailable:'Joylashuv ob-havosi ma\'lumotini olib bo\'lmadi.', locationWeatherNeedsPermission:'Ob-havoni ko\'rish uchun joylashuvga ruxsat bering.', localWindTitle:'Kuchli shamol xavfi', localWindInfo:'Shamol {speed} km/soatgacha kuchayishi mumkin ({time}). Ochiq joylarda ehtiyot bo\'ling.', localUvTitle:'Quyosh nuri kuchli', localUvInfo:'UV indeksi {uv} gacha ko\'tarilishi mumkin. Quyoshdan himoyalaning.', localWeatherClear:'Hozircha kuchli shamol yoki yuqori UV xavfi prognoz qilinmagan.', avalancheUnavailable:'Qor ko\'chkisi: hududiy ogohlantirish manbasi ulanmagan.', sosButton:'SOS — favqulodda chaqiruv', hold:'Bosib turing (3 soniya)', firstAid:'Birinchi yordam', incident:'Hodisa haqida xabar', familyMembers:'Oila a\'zolari', safeCount:'3 kishi xavfsiz', imSafe:'Men xavfsizman', recentAlerts:'So\'nggi ogohlantirishlar',
    pageTitle:'Xavfsiz Hayot — favqulodda vaziyatlar ilovasi', hazard:'● Xavf zonasi', shelter:'● Boshpana', hospital:'● Kasalxona', mapNote:'Joylashuvingizni taxminiy ko\'rsatish uchun xaritani ochib, brauzer ruxsatini bering.', mapLive:'Xarita taxminiy joriy joylashuvingizni ko\'rsatmoqda.', locate:'Mening joylashuvimni ko\'rsatish', sendLocationToFamily:'Joylashuvni oilaviy chatga yuborish', locationSent:'Joylashuv oilaviy chatga yuborildi.', weather:'Ob-havo', weatherLoading:'Ob-havo yuklanmoqda...', weatherUnavailable:'Ob-havo ma\'lumotini olib bo\'lmadi.', clearWeather:'Ochiq', cloudyWeather:'Bulutli', rainWeather:'Yomg\'ir', snowWeather:'Qor', stormWeather:'Momaqaldiroq', familyChat:'Oila bilan suhbat', chatNotice:'Namoyish rejimi: xabarlar faqat shu qurilmada saqlanadi; boshqa telefonlarga yuborilmaydi.', liveLocation:'Jonli joylashuvni ulashish', stopLiveLocation:'Ulashishni to\'xtatish', liveLocationActive:'Jonli joylashuv', sharedLocation:'Ulashilgan joylashuv', liveLocationStopped:'Jonli joylashuv to\'xtatildi.', write:'Xabar yozing...', send:'Yuborish',
    reportTitle:'Hodisa haqida xabar berish', incidentType:'Hodisa turi', fire:'Yong\'in', flood:'Suv toshqini / quvur yorilishi', traffic:'Yo\'l halokati', infrastructure:'Buzilgan infratuzilma', other:'Boshqa', description:'Tavsif', describe:'Nima sodir bo\'lganini qisqacha yozing...', attach:'📷 Foto/video biriktirish uchun bosing', location:'Joylashuv', submit:'Xabarni yuborish', myReports:'Mening xabarlarim', aidTitle:'Birinchi yordam yo\'riqnomalari',
    userName:'Jaloliddin Abubakirov', city:'Jizzax shahri', blood:'Qon guruhi', language:'Til', contacts:'Favqulodda kontaktlar', addContact:'+ Kontakt qo\'shish', notifications:'Push-bildirishnomalar', share:'Joylashuvni oila bilan ulashish', volunteers:'Ko\'ngillilar tarmog\'iga qo\'shilish', home:'Bosh sahifa', map:'Xarita', family:'Oila', report:'Xabar', help:'Yordam', profile:'Profil',
    wife:'Dilnoza · Turmush o\'rtog\'im', wifeRelation:'Turmush o\'rtog\'i', mother:'Onam', father:'Dadam', familyGroup:'Oilaviy guruh', emptyChat:'Bu suhbatda hali xabar yo\'q.', emptyReports:'Hali xabar yuborilmagan', accepted:'Qabul qilindi', noDescription:'(tavsifsiz)',
    attached:'1 ta fayl biriktirildi (namoyish rejimi)', sent:'Xabar qabul qilindi (namoyish rejimi)', sos:'Yordam xabari oilaviy chatga qo\'shildi (namoyish rejimi)', safeStatus:'Xavfsizlik xabari oilaviy chatga qo\'shildi (namoyish rejimi)', sosMessage:'Yordam kerak! SOS signalini yubordim.', safeMessage:'Men xavfsizman.',
    approximate:'Taxminiy joylashuv aniqlanmagan', locationUnknown:'Joylashuv hali aniqlanmadi', locating:'Joylashuv aniqlanmoqda...', findingLocation:'Taxminiy joylashuv so\'ralmoqda. Iltimos, kuting.', locationFound:'Taxminiy joylashuvingiz xaritada ko\'rsatildi.', deniedLocation:'Joylashuvga ruxsat berilmadi. Brauzer sozlamalarida ushbu sayt uchun Location ruxsatini yoqing va qayta urinib ko\'ring.', positionUnavailable:'Qurilmadan joylashuv olinmadi. GPS yoqilganini tekshiring va qayta urinib ko\'ring.', locationTimeout:'Joylashuvni aniqlash vaqti tugadi. Qayta urinib ko\'ring.', locationUnsupported:'Bu brauzer joylashuvni aniqlashni qo\'llab-quvvatlamaydi.', locationLabel:'Taxminiy joylashuv: {lat}, {lng}', reportLocation:'Taxminiy joylashuv: {lat}, {lng}', locateError:'Joylashuv aniqlanmadi. Xarita joylashuv ruxsati berilgach ko\'rsatiladi.',
    earthquake:'Zilzila vaqtida', earthquakeText:'Darhol "Egil, yashirin, mahkam ushla" qoidasiga amal qiling: stol tagiga eging, boshingizni himoya qiling. Derazadan va shkaflardan uzoqlashing. Silkinish to\'xtagach, ehtiyotkorlik bilan binodan chiqing, liftdan foydalanmang.',
    floodGuide:'Suv toshqinida', floodText:'Baland joyga chiqing, oqayotgan suvdan piyoda yoki avtomobilda o\'tishga urinmang. Elektr asboblarini o\'chiring va rasmiy ko\'rsatmalarga amal qiling.',
    fireGuide:'Yong\'in paytida', fireText:'Tutun ostidan emaklab harakatlaning. Og\'iz-burningizni nam mato bilan yoping. Issiq eshikni ochmang va liftdan foydalanmang.', cpr:'Yurak to\'xtashida (BYUR)', cprText:'112 raqamiga qo\'ng\'iroq qiling. Ko\'krak qafasining markaziga daqiqasiga 100–120 marta bosing. Tibbiy yordam kelguncha davom eting.', bleeding:'Qattiq qon ketishda', bleedingText:'Yarani toza mato bilan bosib turing. Bosimni to\'xtatmang; mato qonga to\'lsa, ustidan yana qatlam qo\'ying.',
    ipLocate:'Internet orqali taxminiy joylashuvni aniqlash', ipLocationPrivacy:'Bu usul taxminiy joylashuv uchun IP manzilingizni ipwho.is xizmatiga yuboradi.', ipLocationLoading:'Internet orqali joylashuv aniqlanmoqda...', ipLocationFound:'Internet orqali taxminiy joylashuv xaritada ko\'rsatildi.', ipLocationLabel:'Taxminiy joylashuv (internet): {lat}, {lng}', ipLocationUnavailable:'Internet orqali ham joylashuv olinmadi. Tarmoqni tekshiring.', deviceMapNote:'Qurilma joylashuvini ko\'rsatish uchun brauzer ruxsatini bering.', deviceMapLive:'Xarita qurilmangiz joylashuvini ko\'rsatmoqda.', deviceFindingLocation:'Qurilmangiz joylashuvi aniqlanmoqda. Iltimos, kuting.', deviceLocationFound:'Qurilma joylashuvi xaritada ko\'rsatildi.', deviceLocationLabel:'Qurilma joylashuvi: {lat}, {lng} (aniqlik ±{accuracy} m)',
    remove:'O\'chirish', namePrompt:'Kontakt ismi:', relationPrompt:'Munosabati (masalan, ota, do\'st):', close:'Yaqin kishi', contactAdded:'Kontakt qo\'shildi', languageChanged:'Til o\'zgartirildi', storageError:'Xotira to\'ldi: xabar saqlanmadi', quakeTitle:'M{mag} zilzila: {place}', quakeInTime:'Masofa ~{km} km. S-to\'lqin bo\'yicha taxminiy vaqt: {seconds} soniya. Bu aniq erta ogohlantirish emas.', quakeMayArrived:'Masofa ~{km} km. Silkinish yetib kelgan bo\'lishi mumkin. Xavfsizlik qoidalariga amal qiling.', quakeDismiss:'Zilzila ogohlantirishini yopish', quakeFeedUnavailable:'USGS zilzila ma\'lumotini olib bo\'lmadi.',
  },
  ru: {
    appName:'Безопасная жизнь', demo:'Тестовый режим — демонстрационные данные', wind:'Джизакская область — предупреждение о сильном ветре', windInfo:'Сегодня с 18:00 до 23:00. Будьте осторожны на открытых участках.', locationWeatherLoading:'Загружаем погоду для вашего местоположения...', locationWeatherUnavailable:'Не удалось получить погоду для вашего местоположения.', locationWeatherNeedsPermission:'Разрешите доступ к геопозиции, чтобы увидеть погоду.', localWindTitle:'Сильный ветер', localWindInfo:'Ветер может усилиться до {speed} км/ч ({time}). Будьте осторожны на открытом воздухе.', localUvTitle:'Высокий уровень УФ', localUvInfo:'УФ-индекс может подняться до {uv}. Защититесь от солнца.', localWeatherClear:'Сильный ветер или высокий УФ-индекс не ожидаются.', avalancheUnavailable:'Лавины: источник региональных предупреждений не подключён.', sosButton:'SOS — экстренный вызов', hold:'Удерживайте 3 секунды', firstAid:'Первая помощь', incident:'Сообщить о происшествии', familyMembers:'Члены семьи', safeCount:'3 человека в безопасности', imSafe:'Я в безопасности', recentAlerts:'Последние предупреждения',
    pageTitle:'Безопасная жизнь — приложение экстренной помощи', hazard:'● Опасная зона', shelter:'● Укрытие', hospital:'● Больница', mapNote:'Откройте карту и разрешите браузеру доступ к геопозиции, чтобы показать примерное местоположение.', mapLive:'Карта показывает примерное текущее местоположение.', locate:'Показать моё местоположение', sendLocationToFamily:'Отправить геопозицию в семейный чат', locationSent:'Геопозиция отправлена в семейный чат.', weather:'Погода', weatherLoading:'Загружаем погоду...', weatherUnavailable:'Не удалось получить данные о погоде.', clearWeather:'Ясно', cloudyWeather:'Облачно', rainWeather:'Дождь', snowWeather:'Снег', stormWeather:'Гроза', familyChat:'Семейный чат', chatNotice:'Демонстрационный режим: сообщения хранятся только на этом устройстве и не отправляются на другие телефоны.', liveLocation:'Поделиться геопозицией в реальном времени', stopLiveLocation:'Остановить трансляцию', liveLocationActive:'Геопозиция в реальном времени', sharedLocation:'Отправленная геопозиция', liveLocationStopped:'Трансляция геопозиции остановлена.', write:'Введите сообщение...', send:'Отправить',
    reportTitle:'Сообщить о происшествии', incidentType:'Тип происшествия', fire:'Пожар', flood:'Наводнение / прорыв трубы', traffic:'Дорожная авария', infrastructure:'Повреждение инфраструктуры', other:'Другое', description:'Описание', describe:'Кратко опишите, что произошло...', attach:'📷 Нажмите, чтобы прикрепить фото или видео', location:'Местоположение', submit:'Отправить сообщение', myReports:'Мои сообщения', aidTitle:'Инструкции по первой помощи',
    userName:'Jaloliddin Abubakirov', city:'Город Джизак', blood:'Группа крови', language:'Язык', contacts:'Экстренные контакты', addContact:'+ Добавить контакт', notifications:'Push-уведомления', share:'Делиться местоположением с семьёй', volunteers:'Присоединиться к волонтёрам', home:'Главная', map:'Карта', family:'Семья', report:'Сообщить', help:'Помощь', profile:'Профиль',
    wife:'Дильноза · Супруга', wifeRelation:'Супруга', mother:'Мама', father:'Папа', familyGroup:'Семейная группа', emptyChat:'В этой переписке пока нет сообщений.', emptyReports:'Сообщений пока нет', accepted:'Принято', noDescription:'(без описания)',
    attached:'Файл прикреплён (демонстрационный режим)', sent:'Сообщение принято (демонстрационный режим)', sos:'Сообщение о помощи добавлено в семейный чат (демонстрационный режим)', safeStatus:'Сообщение о безопасности добавлено в семейный чат (демонстрационный режим)', sosMessage:'Нужна помощь! Я отправил сигнал SOS.', safeMessage:'Я в безопасности.',
    approximate:'Примерное местоположение не определено', locationUnknown:'Местоположение ещё не определено', locating:'Определяем местоположение...', findingLocation:'Запрашиваем примерное местоположение. Пожалуйста, подождите.', locationFound:'Ваше примерное местоположение показано на карте.', deniedLocation:'Доступ к местоположению запрещён. Разрешите геопозицию для этого сайта в настройках браузера и повторите попытку.', positionUnavailable:'Не удалось получить данные устройства. Проверьте, включён ли GPS, и повторите попытку.', locationTimeout:'Время ожидания геопозиции истекло. Повторите попытку.', locationUnsupported:'Этот браузер не поддерживает определение местоположения.', locationLabel:'Примерное местоположение: {lat}, {lng}', reportLocation:'Примерное местоположение: {lat}, {lng}', locateError:'Местоположение не определено. Карта будет показана после разрешения доступа.',
    earthquake:'Во время землетрясения', earthquakeText:'Выполните правило «Пригнись, укройся, держись»: спрячьтесь под столом и защитите голову. Отойдите от окон и шкафов. После толчков осторожно выйдите из здания, не пользуйтесь лифтом.', floodGuide:'Во время наводнения', floodText:'Перейдите на возвышенность. Не пересекайте поток пешком или на машине. Отключите электроприборы и следуйте указаниям служб.', fireGuide:'При пожаре', fireText:'Передвигайтесь ползком под дымом. Закройте рот и нос влажной тканью. Не открывайте горячую дверь и не пользуйтесь лифтом.', cpr:'При остановке сердца (СЛР)', cprText:'Позвоните по номеру 112. Нажимайте на центр грудной клетки 100–120 раз в минуту. Продолжайте до прибытия медиков.', bleeding:'При сильном кровотечении', bleedingText:'Прижмите рану чистой тканью. Не ослабляйте давление; если ткань пропиталась кровью, положите сверху ещё один слой.',
    ipLocate:'Определить примерное местоположение через интернет', ipLocationPrivacy:'Для этого ваш IP-адрес будет передан сервису ipwho.is, который определит примерное местоположение.', ipLocationLoading:'Определяем местоположение через интернет...', ipLocationFound:'Примерное местоположение по IP показано на карте.', ipLocationLabel:'Примерное местоположение (интернет): {lat}, {lng}', ipLocationUnavailable:'Не удалось определить местоположение через интернет. Проверьте сеть.', deviceMapNote:'Разрешите браузеру доступ к геопозиции устройства.', deviceMapLive:'Карта показывает местоположение вашего устройства.', deviceFindingLocation:'Определяем местоположение устройства. Подождите.', deviceLocationFound:'Местоположение устройства показано на карте.', deviceLocationLabel:'Местоположение устройства: {lat}, {lng} (точность ±{accuracy} м)',
    remove:'Удалить', namePrompt:'Имя контакта:', relationPrompt:'Кем приходится (например, отец, друг):', close:'Близкий человек', contactAdded:'Контакт добавлен', languageChanged:'Язык изменён', storageError:'Память заполнена: сообщение не сохранено', quakeTitle:'Землетрясение M{mag}: {place}', quakeInTime:'Расстояние ~{km} км. Примерное время S-волны: {seconds} сек. Это не официальное раннее предупреждение.', quakeMayArrived:'Расстояние ~{km} км. Толчки уже могли дойти. Следуйте правилам безопасности.', quakeDismiss:'Закрыть предупреждение о землетрясении', quakeFeedUnavailable:'Не удалось получить данные о землетрясениях USGS.',
  },
  en: {
    appName:'Safe Life', demo:'Test mode — sample data for demonstration', wind:'Jizzakh Region — strong wind warning', windInfo:'Today, 18:00–23:00. Take care in open areas.', locationWeatherLoading:'Loading weather for your location...', locationWeatherUnavailable:'Weather for your location could not be loaded.', locationWeatherNeedsPermission:'Allow location access to see local weather.', localWindTitle:'Strong wind risk', localWindInfo:'Wind may reach {speed} km/h ({time}). Take care outdoors.', localUvTitle:'High UV exposure', localUvInfo:'UV index may reach {uv}. Protect yourself from the sun.', localWeatherClear:'No strong wind or high UV risk is forecast right now.', avalancheUnavailable:'Avalanche alerts: no regional warning source is connected.', sosButton:'SOS — emergency call', hold:'Press and hold for 3 seconds', firstAid:'First aid', incident:'Report an incident', familyMembers:'Family members', safeCount:'3 people safe', imSafe:'I am safe', recentAlerts:'Recent alerts',
    pageTitle:'Safe Life — emergency response app', hazard:'● Hazard zone', shelter:'● Shelter', hospital:'● Hospital', mapNote:'Open the map and allow browser location access to show your approximate location.', mapLive:'The map is showing your approximate current location.', locate:'Show my location', sendLocationToFamily:'Send location to family chat', locationSent:'Location sent to family chat.', weather:'Weather', weatherLoading:'Loading weather...', weatherUnavailable:'Weather data could not be loaded.', clearWeather:'Clear', cloudyWeather:'Cloudy', rainWeather:'Rain', snowWeather:'Snow', stormWeather:'Thunderstorm', familyChat:'Family chat', chatNotice:'Demo mode: messages are stored only on this device and are not sent to other phones.', liveLocation:'Share live location', stopLiveLocation:'Stop sharing', liveLocationActive:'Live location', sharedLocation:'Shared location', liveLocationStopped:'Live location sharing stopped.', write:'Write a message...', send:'Send',
    reportTitle:'Report an incident', incidentType:'Incident type', fire:'Fire', flood:'Flood / burst pipe', traffic:'Road accident', infrastructure:'Infrastructure damage', other:'Other', description:'Description', describe:'Briefly describe what happened...', attach:'📷 Click to attach a photo or video', location:'Location', submit:'Submit report', myReports:'My reports', aidTitle:'First aid guides',
    userName:'Jaloliddin Abubakirov', city:'Jizzakh city', blood:'Blood type', language:'Language', contacts:'Emergency contacts', addContact:'+ Add contact', notifications:'Push notifications', share:'Share location with family', volunteers:'Join the volunteer network', home:'Home', map:'Map', family:'Family', report:'Report', help:'Help', profile:'Profile',
    wife:'Dilnoza · Wife', wifeRelation:'Wife', mother:'Mother', father:'Father', familyGroup:'Family group', emptyChat:'No messages in this conversation yet.', emptyReports:'No reports submitted yet', accepted:'Received', noDescription:'(no description)',
    attached:'1 file attached (demo mode)', sent:'Report received (demo mode)', sos:'Help message added to the family chat (demo mode)', safeStatus:'Safety message added to the family chat (demo mode)', sosMessage:'I need help! I sent an SOS alert.', safeMessage:'I am safe.',
    approximate:'Approximate location not detected', locationUnknown:'Location has not been detected yet', locating:'Finding location...', findingLocation:'Requesting approximate location. Please wait.', locationFound:'Your approximate location is shown on the map.', deniedLocation:'Location access was denied. Allow Location for this site in your browser settings, then try again.', positionUnavailable:'Could not get a position from your device. Check that GPS is enabled and try again.', locationTimeout:'Location request timed out. Please try again.', locationUnsupported:'This browser does not support location access.', locationLabel:'Approximate location: {lat}, {lng}', reportLocation:'Approximate location: {lat}, {lng}', locateError:'Location was not detected. The map will appear after access is allowed.',
    earthquake:'During an earthquake', earthquakeText:'Follow “Drop, cover, and hold on”: get under a sturdy table and protect your head. Stay away from windows and cabinets. After shaking stops, leave carefully and do not use elevators.', floodGuide:'During a flood', floodText:'Move to higher ground. Do not cross moving water on foot or by car. Turn off electrical appliances and follow official instructions.', fireGuide:'During a fire', fireText:'Stay low and crawl under smoke. Cover your mouth and nose with a damp cloth. Do not open a hot door or use an elevator.', cpr:'In case of cardiac arrest (CPR)', cprText:'Call 112. Push hard and fast in the center of the chest, 100–120 times per minute. Continue until medical help arrives.', bleeding:'For severe bleeding', bleedingText:'Press the wound with a clean cloth. Keep applying pressure; if blood soaks through, add another layer on top.',
    ipLocate:'Find approximate location using the internet', ipLocationPrivacy:'This sends your IP address to ipwho.is to estimate your location.', ipLocationLoading:'Finding location over the internet...', ipLocationFound:'Approximate IP location is shown on the map.', ipLocationLabel:'Approximate location (internet): {lat}, {lng}', ipLocationUnavailable:'Could not determine location over the internet. Check your connection.', deviceMapNote:'Allow browser access to your device location.', deviceMapLive:'The map is showing your device location.', deviceFindingLocation:'Finding your device location. Please wait.', deviceLocationFound:'Device location is shown on the map.', deviceLocationLabel:'Device location: {lat}, {lng} (accuracy ±{accuracy} m)',
    remove:'Remove', namePrompt:'Contact name:', relationPrompt:'Relationship (for example, father, friend):', close:'Family member', contactAdded:'Contact added', languageChanged:'Language changed', storageError:'Storage is full: message was not saved', quakeTitle:'M{mag} earthquake: {place}', quakeInTime:'Distance ~{km} km. Estimated S-wave arrival: {seconds} seconds. This is not an official early warning.', quakeMayArrived:'Distance ~{km} km. Shaking may already have arrived. Follow safety guidance.', quakeDismiss:'Dismiss earthquake alert', quakeFeedUnavailable:'Could not load USGS earthquake data.',
  },
};
const localeNames = { uz: 'uz-UZ', ru: 'ru-RU', en: 'en-US' };
let currentLanguage = ['uz', 'ru', 'en'].includes(localStorage.getItem('xavfsiz-hayot-language')) ? localStorage.getItem('xavfsiz-hayot-language') : 'uz';
let userLatLng = null;
let realLocation = false;
let locationSource = 'device';
let locationAccuracy = null;
let locationRequestPending = false;
let currentConversation = 'family';
let liveWatchId = null;
let liveMessageId = null;
let liveConversation = null;
let lastMapRefresh = { coords: null, at: 0 };
let lastWeatherLocation = null;
let weatherRequestId = 0;
let currentWeather = null;
let weatherFailed = false;
const USGS_URL = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_hour.geojson';
const MIN_QUAKE_MAGNITUDE = 4;
const MAX_QUAKE_DISTANCE_KM = 1500;
const S_WAVE_SPEED_KM_S = 3.5;
const MAX_QUAKE_AGE_MS = 30 * 60 * 1000;
const seenQuakes = new Set();
let quakeLocation = null;
let quakeTimer = null;
let quakeRequestPending = false;
let quakeMonitorVersion = 0;
let currentQuakeAlert = null;
const familyMembers = [
  { id: 'mother', key: 'mother' }, { id: 'father', key: 'father' },
  { id: 'family', key: 'familyGroup' },
];
const guides = [
  ['earthquake', 'earthquakeText'], ['floodGuide', 'floodText'], ['fireGuide', 'fireText'],
  ['cpr', 'cprText'], ['bleeding', 'bleedingText'],
];
const t = (key) => text[currentLanguage][key] || text.uz[key] || key;

function toast(message, duration = 2600) {
  const element = $('#toast');
  element.textContent = message;
  element.classList.add('show');
  clearTimeout(element.timer);
  element.timer = setTimeout(() => element.classList.remove('show'), duration);
}

function distanceMeters(first, second) {
  const radians = (degrees) => degrees * Math.PI / 180;
  const latitudeDelta = radians(second[0] - first[0]);
  const longitudeDelta = radians(second[1] - first[1]);
  const value = Math.sin(latitudeDelta / 2) ** 2
    + Math.cos(radians(first[0])) * Math.cos(radians(second[0])) * Math.sin(longitudeDelta / 2) ** 2;
  return 6371000 * 2 * Math.atan2(Math.sqrt(value), Math.sqrt(1 - value));
}
function mapUrl() {
  const locale = currentLanguage === 'uz' ? 'uz' : currentLanguage;
  const zoom = locationSource === 'ip' ? 10 : 16;
  const precision = locationSource === 'ip' ? 3 : 5;
  const latitude = userLatLng[0].toFixed(precision);
  const longitude = userLatLng[1].toFixed(precision);
  return `https://maps.google.com/maps?q=${latitude},${longitude}&z=${zoom}&output=embed&hl=${locale}`;
}
function refreshMap(force = false) {
  const frame = $('#mapFrame');
  if (!realLocation || !userLatLng) return;
  const now = Date.now();
  if (!force && lastMapRefresh.coords && distanceMeters(lastMapRefresh.coords, userLatLng) < 100 && now - lastMapRefresh.at < 30000) return;
  const source = mapUrl();
  if (frame.src !== source) frame.src = source;
  lastMapRefresh = { coords: [...userLatLng], at: now };
  frame.title = currentLanguage === 'ru' ? 'Google Карты' : currentLanguage === 'en' ? 'Google Maps' : 'Google xaritasi';
}
function updateLocation() {
  const precision = locationSource === 'ip' ? 3 : 5;
  const lat = realLocation ? userLatLng[0].toFixed(precision) : '';
  const lng = realLocation ? userLatLng[1].toFixed(precision) : '';
  const labelKey = locationSource === 'ip' ? 'ipLocationLabel' : 'deviceLocationLabel';
  const label = realLocation
    ? t(labelKey).replace('{lat}', lat).replace('{lng}', lng).replace('{accuracy}', String(Math.round(locationAccuracy || 0)))
    : t('locationUnknown');
  $('#locLabel').textContent = label;
  $('#repLoc').value = label;
  $('#mapNote').textContent = realLocation
    ? t(locationSource === 'ip' ? 'mapLive' : 'deviceMapLive')
    : t('deviceMapNote');
}
function weatherDescription(code) {
  if (code === 0) return t('clearWeather');
  if ([1, 2, 3, 45, 48].includes(code)) return t('cloudyWeather');
  if ((code >= 51 && code <= 67) || (code >= 80 && code <= 82)) return t('rainWeather');
  if ((code >= 71 && code <= 77) || code === 85 || code === 86) return t('snowWeather');
  if (code >= 95 && code <= 99) return t('stormWeather');
  return t('cloudyWeather');
}
function renderWeather() {
  const output = $('#weatherCurrent');
  if (currentWeather) {
    output.textContent = `${weatherDescription(currentWeather.weather_code)} · ${Math.round(currentWeather.temperature_2m)}°C · ${Math.round(currentWeather.wind_speed_10m)} km/h`;
  } else {
    output.textContent = !realLocation ? t('locationWeatherNeedsPermission') : weatherFailed ? t('weatherUnavailable') : t('weatherLoading');
  }
}
function renderLocationAlert(data) {
  const card = $('#locationAlert');
  const icon = $('#locationAlertIcon');
  const title = $('#locationAlertTitle');
  const info = $('#locationAlertInfo');
  const avalanche = $('#avalancheNote');
  card.classList.remove('is-clear');
  icon.textContent = '!';
  if (data === undefined) {
    title.textContent = realLocation ? t('locationWeatherLoading') : t('locationWeatherNeedsPermission');
    info.textContent = '';
  } else if (data === null) {
    title.textContent = t('locationWeatherUnavailable');
    info.textContent = '';
  } else {
    const winds = data.hourly.wind_speed_10m || [];
    const uvValues = data.hourly.uv_index || [];
    const times = data.hourly.time || [];
    const nextHours = Math.min(6, winds.length, uvValues.length);
    let maxWind = { value: data.current.wind_speed_10m, index: 0 };
    let maxUv = { value: 0, index: 0 };
    for (let index = 0; index < nextHours; index += 1) {
      if (winds[index] > maxWind.value) maxWind = { value: winds[index], index };
      if (uvValues[index] > maxUv.value) maxUv = { value: uvValues[index], index };
    }
    const time = times[maxWind.index]?.slice(11, 16) || '';
    if (maxWind.value >= 40) {
      title.textContent = t('localWindTitle');
      info.textContent = t('localWindInfo').replace('{speed}', Math.round(maxWind.value)).replace('{time}', time);
    } else if (maxUv.value >= 8) {
      title.textContent = t('localUvTitle');
      info.textContent = t('localUvInfo').replace('{uv}', Math.round(maxUv.value));
    } else {
      title.textContent = t('weather');
      info.textContent = t('localWeatherClear');
      card.classList.add('is-clear');
      icon.textContent = '✓';
    }
  }
  avalanche.textContent = t('avalancheUnavailable');
}
function renderQuakeAlert() {
  const card = $('#quakeAlert');
  if (!currentQuakeAlert) {
    card.hidden = true;
    return;
  }
  card.hidden = false;
  $('#quakeTitle').textContent = t('quakeTitle')
    .replace('{mag}', currentQuakeAlert.mag.toFixed(1))
    .replace('{place}', currentQuakeAlert.place);
  const detailKey = currentQuakeAlert.seconds > 0 ? 'quakeInTime' : 'quakeMayArrived';
  $('#quakeInfo').textContent = t(detailKey)
    .replace('{km}', String(currentQuakeAlert.km))
    .replace('{seconds}', String(currentQuakeAlert.seconds));
}
function showQuakeAlert(quake) {
  currentQuakeAlert = quake;
  renderQuakeAlert();
  if (navigator.vibrate) navigator.vibrate([300, 150, 300]);
}
function stopQuakeMonitoring() {
  quakeMonitorVersion += 1;
  if (quakeTimer !== null) clearInterval(quakeTimer);
  quakeTimer = null;
  quakeLocation = null;
}
function startQuakeMonitoring() {
  const nextLocation = [...userLatLng];
  if (quakeLocation && distanceMeters(quakeLocation, nextLocation) >= 1000) quakeMonitorVersion += 1;
  quakeLocation = nextLocation;
  if (quakeTimer !== null) return;
  checkQuakes();
  quakeTimer = setInterval(() => {
    if (quakeLocation) checkQuakes();
  }, 60000);
}
async function checkQuakes() {
  if (quakeRequestPending || !quakeLocation) return;
  quakeRequestPending = true;
  const requestVersion = quakeMonitorVersion;
  const [userLatitude, userLongitude] = quakeLocation;
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 12000);
  try {
    const response = await fetch(USGS_URL, { cache: 'no-store', signal: controller.signal });
    if (!response.ok) throw new Error(`USGS request failed: ${response.status}`);
    const data = await response.json();
    if (requestVersion !== quakeMonitorVersion || !quakeLocation) return;
    if (!Array.isArray(data.features)) throw new Error('USGS feed has no feature list');
    const now = Date.now();
    const candidates = [];
    data.features.forEach((feature) => {
      const id = feature.id;
      const properties = feature.properties;
      const coordinates = feature.geometry?.coordinates;
      const magnitude = properties?.mag;
      const eventTime = properties?.time;
      if (!id || seenQuakes.has(id) || !Number.isFinite(magnitude) || magnitude < MIN_QUAKE_MAGNITUDE) return;
      if (!Array.isArray(coordinates) || coordinates.length < 3 || !coordinates.slice(0, 3).every(Number.isFinite)) return;
      const age = now - eventTime;
      if (!Number.isFinite(eventTime) || age < -60000) return;
      if (age > MAX_QUAKE_AGE_MS) { seenQuakes.add(id); return; }
      const [longitude, latitude, depth] = coordinates;
      const surfaceKm = distanceMeters([userLatitude, userLongitude], [latitude, longitude]) / 1000;
      if (surfaceKm > MAX_QUAKE_DISTANCE_KM) return;
      seenQuakes.add(id);
      const hypocentralKm = Math.hypot(surfaceKm, Math.max(0, depth));
      const elapsedSeconds = Math.max(0, age / 1000);
      candidates.push({
        id,
        time: eventTime,
        mag: magnitude,
        place: properties.place || 'Noma\'lum joy',
        km: Math.round(surfaceKm),
        seconds: Math.max(0, Math.round(hypocentralKm / S_WAVE_SPEED_KM_S - elapsedSeconds)),
      });
    });
    candidates.sort((first, second) => second.mag - first.mag || second.time - first.time);
    if (candidates.length) showQuakeAlert(candidates[0]);
  } catch (error) {
    console.warn(t('quakeFeedUnavailable'), error);
  } finally {
    clearTimeout(timeoutId);
    quakeRequestPending = false;
    if (quakeLocation && requestVersion !== quakeMonitorVersion) checkQuakes();
  }
}
async function loadWeather() {
  const requestId = ++weatherRequestId;
  const panel = $('#weatherPanel');
  panel.setAttribute('aria-busy', 'true');
  currentWeather = null;
  weatherFailed = false;
  renderWeather();
  renderLocationAlert();
  const query = new URLSearchParams({
    latitude: userLatLng[0], longitude: userLatLng[1],
    current: 'temperature_2m,weather_code,wind_speed_10m', timezone: 'auto',
    hourly: 'wind_speed_10m,uv_index', forecast_hours: '6',
  });
  try {
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?${query}`);
    if (!response.ok) throw new Error(`Weather request failed: ${response.status}`);
    const data = await response.json();
    if (requestId !== weatherRequestId) return;
    currentWeather = data.current;
    renderWeather();
    renderLocationAlert(data);
  } catch (error) {
    if (requestId !== weatherRequestId) return;
    weatherFailed = true;
    renderWeather();
    renderLocationAlert(null);
    console.warn('Weather could not be loaded:', error);
  }
  panel.setAttribute('aria-busy', 'false');
}
function applyPosition(position, refreshWeather = false) {
  userLatLng = [position.coords.latitude, position.coords.longitude];
  realLocation = true;
  locationSource = 'device';
  locationAccuracy = position.coords.accuracy;
  $('#ipLocateBtn').hidden = true;
  $('#ipLocationPrivacy').hidden = true;
  updateLocation();
  refreshMap();
  startQuakeMonitoring();
  if (refreshWeather || !lastWeatherLocation || distanceMeters(lastWeatherLocation, userLatLng) >= 1000) {
    lastWeatherLocation = [...userLatLng];
    loadWeather();
  }
}
function requestLocation(onSuccess = null, onFailure = null) {
  const button = $('#locateBtn');
  const message = $('#mapMessage');
  if (locationRequestPending) return;
  stopQuakeMonitoring();
  userLatLng = null;
  realLocation = false;
  locationSource = 'device';
  locationAccuracy = null;
  lastMapRefresh = { coords: null, at: 0 };
  $('#mapFrame').removeAttribute('src');
  $('#ipLocateBtn').hidden = true;
  $('#ipLocationPrivacy').hidden = true;
  updateLocation();
  if (!navigator.geolocation) {
    message.textContent = t('locationUnsupported');
    message.classList.add('show');
    $('#ipLocateBtn').hidden = false;
    $('#ipLocationPrivacy').hidden = false;
    if (typeof onFailure === 'function') onFailure();
    return;
  }

  locationRequestPending = true;
  button.disabled = true;
  button.setAttribute('aria-busy', 'true');
  button.textContent = t('locating');
  message.textContent = t('deviceFindingLocation');
  message.classList.add('show');
  clearTimeout(message.hideTimer);

  navigator.geolocation.getCurrentPosition((position) => {
    locationRequestPending = false;
    applyPosition(position, true);
    button.disabled = false;
    button.removeAttribute('aria-busy');
    button.textContent = t('locate');
    message.textContent = t('deviceLocationFound');
    message.classList.add('show');
    message.hideTimer = setTimeout(() => message.classList.remove('show'), 4500);
    refreshMap();
    if (typeof onSuccess === 'function') onSuccess();
  }, (error) => {
    locationRequestPending = false;
    button.disabled = false;
    button.removeAttribute('aria-busy');
    button.textContent = t('locate');
    const errorKey = error.code === 1
      ? 'deniedLocation'
      : error.code === 3 ? 'locationTimeout' : 'positionUnavailable';
    message.textContent = t(errorKey);
    message.classList.add('show');
    $('#ipLocateBtn').hidden = false;
    $('#ipLocationPrivacy').hidden = false;
    updateLocation();
    if (!realLocation) refreshMap();
    if (typeof onFailure === 'function') onFailure();
  }, { enableHighAccuracy: true, timeout: 20000, maximumAge: 0 });
}

async function requestIpLocation() {
  const button = $('#ipLocateBtn');
  const message = $('#mapMessage');
  button.disabled = true;
  stopQuakeMonitoring();
  message.textContent = t('ipLocationLoading');
  message.classList.add('show');
  try {
    const response = await fetch('https://ipwho.is/', { cache: 'no-store' });
    if (!response.ok) throw new Error(`IP location request failed: ${response.status}`);
    const data = await response.json();
    if (!data.success || !Number.isFinite(data.latitude) || !Number.isFinite(data.longitude)) {
      throw new Error('IP location response did not include coordinates');
    }
    userLatLng = [data.latitude, data.longitude];
    realLocation = true;
    locationSource = 'ip';
    locationAccuracy = null;
    updateLocation();
    refreshMap(true);
    lastWeatherLocation = [...userLatLng];
    loadWeather();
    message.textContent = t('ipLocationFound');
  } catch (error) {
    message.textContent = t('ipLocationUnavailable');
    console.warn('Approximate IP location could not be loaded:', error);
  } finally {
    button.disabled = false;
  }
}

function renderAlerts() {
  const alertData = [
    ['roadWork', 'Sharof Rashidov Street · 2 days ago', 'Sharof Rashidov ko\'chasi · 2 kun oldin', 'Улица Шарофа Рашидова · 2 дня назад'],
    ['waterRestored', 'Do\'stlik neighborhood · 3 days ago', 'Do\'stlik mahallasi · 3 kun oldin', 'Махалля Дустлик · 3 дня назад'],
  ];
  const alertTranslations = {
    uz: [['Yo\'l ta\'mirlash ishlari', alertData[0][2]], ['Suv ta\'minoti tiklandi', alertData[1][2]]],
    ru: [['Дорожные работы', alertData[0][3]], ['Водоснабжение восстановлено', alertData[1][3]]],
    en: [['Road maintenance', alertData[0][1]], ['Water supply restored', alertData[1][1]]],
  };
  const feed = $('#alertsFeed');
  feed.replaceChildren();
  alertTranslations[currentLanguage].forEach(([title, detail]) => {
    const row = document.createElement('div');
    row.style.cssText = 'display:flex;justify-content:space-between;gap:8px;padding:10px 0;border-bottom:1px solid var(--line);font-size:12px;';
    const titleElement = document.createElement('span');
    titleElement.textContent = title;
    const detailElement = document.createElement('span');
    detailElement.textContent = detail;
    detailElement.style.cssText = 'color:var(--text-mute);text-align:right;';
    row.append(titleElement, detailElement);
    feed.append(row);
  });
}

let reports = [];
function renderReports() {
  const list = $('#reportList');
  list.replaceChildren();
  if (!reports.length) {
    const empty = document.createElement('div');
    empty.style.cssText = 'color:var(--text-mute);font-size:12px;';
    empty.textContent = t('emptyReports');
    list.append(empty);
    return;
  }
  reports.forEach((report) => {
    const item = document.createElement('div');
    item.className = 'report-item';
    const header = document.createElement('div');
    header.className = 'top';
    const type = document.createElement('b');
    type.textContent = t(report.type);
    const badge = document.createElement('span');
    badge.className = `badge ${report.status}`;
    badge.textContent = t(report.statusKey);
    const description = document.createElement('div');
    description.textContent = report.description || t('noDescription');
    const timestamp = document.createElement('div');
    timestamp.style.cssText = 'color:var(--text-mute);margin-top:4px;';
    timestamp.textContent = report.time;
    header.append(type, badge);
    item.append(header, description, timestamp);
    list.append(item);
  });
}

let contacts = [
  { name: 'Sherzod Karimov', relation: 'brother' },
];
function renderContacts() {
  const list = $('#contactList');
  list.replaceChildren();
  contacts.forEach((contact, index) => {
    const row = document.createElement('div');
    row.className = 'contact-item';
    const label = document.createElement('span');
    const relationship = contact.relation === 'wife' ? t('wifeRelation') : contact.relation === 'brother' ? (currentLanguage === 'ru' ? 'Брат' : currentLanguage === 'en' ? 'Brother' : 'Akasi') : contact.relation;
    label.textContent = `${contact.name} · ${relationship}`;
    const remove = document.createElement('button');
    remove.type = 'button';
    remove.textContent = t('remove');
    remove.addEventListener('click', () => { contacts.splice(index, 1); renderContacts(); });
    row.append(label, remove);
    list.append(row);
  });
}

function renderGuides() {
  const list = $('#accordionList');
  list.replaceChildren();
  guides.forEach(([titleKey, bodyKey]) => {
    const item = document.createElement('div');
    item.className = 'accordion';
    const heading = document.createElement('div');
    heading.className = 'head';
    heading.tabIndex = 0;
    heading.setAttribute('role', 'button');
    heading.setAttribute('aria-expanded', 'false');
    const title = document.createElement('span');
    title.textContent = t(titleKey);
    const arrow = document.createElement('span');
    arrow.className = 'chevron';
    arrow.textContent = '›';
    const body = document.createElement('div');
    body.className = 'body';
    body.textContent = t(bodyKey);
    const toggle = () => {
      item.classList.toggle('open');
      heading.setAttribute('aria-expanded', String(item.classList.contains('open')));
    };
    heading.addEventListener('click', toggle);
    heading.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); toggle(); }
    });
    heading.append(title, arrow);
    item.append(heading, body);
    list.append(item);
  });
}

function renderChat() {
  const people = $('#chatPeople');
  people.replaceChildren();
  familyMembers.forEach((member) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `chat-person${member.id === currentConversation ? ' active' : ''}`;
    button.textContent = t(member.key);
    button.setAttribute('aria-pressed', String(member.id === currentConversation));
    button.addEventListener('click', () => { currentConversation = member.id; renderChat(); });
    people.append(button);
  });
  const currentMember = familyMembers.find((member) => member.id === currentConversation);
  $('#chatHeading').textContent = t(currentMember.key);
  const liveButton = $('#liveLocationBtn');
  liveButton.textContent = liveWatchId === null ? t('liveLocation') : t('stopLiveLocation');
  liveButton.classList.toggle('sharing', liveWatchId !== null);
  liveButton.disabled = liveWatchId === null && !navigator.geolocation;
  const log = $('#chatLog');
  log.replaceChildren();
  const saved = JSON.parse(localStorage.getItem('xavfsiz-hayot-family-chat-v1') || '{}');
  const messages = Array.isArray(saved[currentConversation]) ? saved[currentConversation] : [];
  if (!messages.length) {
    const empty = document.createElement('p');
    empty.className = 'chat-empty';
    empty.textContent = t('emptyChat');
    log.append(empty);
    return;
  }
  messages.forEach((message) => {
    const bubble = document.createElement('div');
    bubble.className = message.type === 'location' ? 'chat-bubble location-bubble' : 'chat-bubble';
    if (message.type === 'location') {
      const label = document.createElement('span');
      label.textContent = message.live ? t('liveLocationActive') : t('sharedLocation');
      const coordinates = document.createElement('a');
      coordinates.href = `https://maps.google.com/?q=${message.coords[0].toFixed(6)},${message.coords[1].toFixed(6)}`;
      coordinates.target = '_blank';
      coordinates.rel = 'noopener noreferrer';
      coordinates.textContent = `${message.coords[0].toFixed(5)}, ${message.coords[1].toFixed(5)}`;
      bubble.append(label, coordinates);
    } else {
      if (message.sender) {
        const sender = document.createElement('strong');
        sender.textContent = message.sender;
        bubble.append(sender);
      }
      const content = document.createElement('span');
      content.textContent = message.text;
      bubble.append(content);
    }
    const time = document.createElement('time');
    time.dateTime = message.sentAt;
    time.textContent = new Date(message.sentAt).toLocaleTimeString(localeNames[currentLanguage], { hour: '2-digit', minute: '2-digit' });
    bubble.append(time);
    log.append(bubble);
  });
  log.scrollTop = log.scrollHeight;
}

function saveLocationToFamilyChat() {
  const saved = readFamilyChat();
  if (!Array.isArray(saved.family)) saved.family = [];
  saved.family.push({ type: 'location', coords: [...userLatLng], live: false, sentAt: new Date().toISOString() });
  try { localStorage.setItem('xavfsiz-hayot-family-chat-v1', JSON.stringify(saved)); }
  catch { toast(t('storageError')); return; }
  currentConversation = 'family';
  renderChat();
  showTab('chat');
  toast(t('locationSent'));
}

function readFamilyChat() {
  try { return JSON.parse(localStorage.getItem('xavfsiz-hayot-family-chat-v1') || '{}'); }
  catch { return {}; }
}
function addFamilyMessage(messageText, noticeKey) {
  const saved = readFamilyChat();
  if (!Array.isArray(saved.family)) saved.family = [];
  saved.family.push({ text: messageText, sender: t('userName'), sentAt: new Date().toISOString() });
  try { localStorage.setItem('xavfsiz-hayot-family-chat-v1', JSON.stringify(saved)); }
  catch { toast(t('storageError')); return; }
  currentConversation = 'family';
  renderChat();
  showTab('chat');
  toast(t(noticeKey));
}
function endStaleLiveLocations() {
  const saved = readFamilyChat();
  let changed = false;
  Object.values(saved).forEach((messages) => {
    if (!Array.isArray(messages)) return;
    messages.forEach((message) => {
      if (message.type === 'location' && message.live) {
        message.live = false;
        message.endedAt = new Date().toISOString();
        changed = true;
      }
    });
  });
  if (changed) {
    try { localStorage.setItem('xavfsiz-hayot-family-chat-v1', JSON.stringify(saved)); }
    catch { toast(t('storageError')); }
  }
}
function removeSpouseConversation() {
  const saved = readFamilyChat();
  if (!Object.hasOwn(saved, 'wife')) return;
  delete saved.wife;
  try { localStorage.setItem('xavfsiz-hayot-family-chat-v1', JSON.stringify(saved)); }
  catch { toast(t('storageError')); }
}
function saveLivePosition(position) {
  const saved = readFamilyChat();
  if (!Array.isArray(saved[liveConversation])) saved[liveConversation] = [];
  let message = saved[liveConversation].find((entry) => entry.id === liveMessageId);
  if (!message) {
    liveMessageId = `location-${Date.now()}`;
    message = { id: liveMessageId, type: 'location', coords: userLatLng, live: true, sentAt: new Date().toISOString() };
    saved[liveConversation].push(message);
  }
  message.coords = [...userLatLng];
  message.accuracy = position.coords.accuracy;
  message.updatedAt = new Date().toISOString();
  message.live = true;
  try { localStorage.setItem('xavfsiz-hayot-family-chat-v1', JSON.stringify(saved)); }
  catch { stopLiveLocation(false); toast(t('storageError')); return; }
  renderChat();
}
function stopLiveLocation(showToast = true) {
  if (liveWatchId !== null) navigator.geolocation.clearWatch(liveWatchId);
  liveWatchId = null;
  if (liveMessageId && liveConversation) {
    const saved = readFamilyChat();
    const message = Array.isArray(saved[liveConversation])
      ? saved[liveConversation].find((entry) => entry.id === liveMessageId)
      : null;
    if (message) {
      message.live = false;
      message.endedAt = new Date().toISOString();
      try { localStorage.setItem('xavfsiz-hayot-family-chat-v1', JSON.stringify(saved)); }
      catch { toast(t('storageError')); }
    }
  }
  liveMessageId = null;
  liveConversation = null;
  renderChat();
  if (showToast) toast(t('liveLocationStopped'));
}
function startLiveLocation() {
  if (!navigator.geolocation) {
    toast(t('locationUnsupported'));
    return;
  }
  liveConversation = currentConversation;
  const button = $('#liveLocationBtn');
  button.disabled = true;
  button.setAttribute('aria-busy', 'true');
  liveWatchId = navigator.geolocation.watchPosition((position) => {
    if (liveWatchId === null) return;
    applyPosition(position);
    saveLivePosition(position);
  }, (error) => {
    if (liveWatchId === null) return;
    const errorKey = error.code === 1 ? 'deniedLocation' : error.code === 3 ? 'locationTimeout' : 'positionUnavailable';
    stopLiveLocation(false);
    toast(t(errorKey), 4500);
  }, { enableHighAccuracy: true, timeout: 20000, maximumAge: 3000 });
  renderChat();
  button.removeAttribute('aria-busy');
}

function applyLanguage(language) {
  currentLanguage = language;
  localStorage.setItem('xavfsiz-hayot-language', language);
  document.documentElement.lang = language;
  document.title = t('pageTitle');
  $$('[data-i18n]').forEach((element) => { element.textContent = t(element.dataset.i18n); });
  $$('[data-i18n-placeholder]').forEach((element) => { element.placeholder = t(element.dataset.i18nPlaceholder); });
  $$('[data-i18n-aria]').forEach((element) => { element.setAttribute('aria-label', t(element.dataset.i18nAria)); });
  $$('[data-i18n-placeholder]').forEach((element) => {
    const value = t(element.dataset.i18nPlaceholder);
    element.placeholder = value;
    element.setAttribute('aria-label', value);
  });
  $$('[data-i18n-title]').forEach((element) => { element.title = t(element.dataset.i18nTitle); });
  $$('.lang-toggle button').forEach((button) => button.classList.toggle('active', button.dataset.lang === language));
  $('#repType').selectedOptions[0].textContent = t($('#repType').value);
  $('#mapMessage').textContent = realLocation ? '' : t('locateError');
  updateLocation();
  renderAlerts();
  renderReports();
  renderContacts();
  renderGuides();
  renderChat();
  renderWeather();
  renderLocationAlert();
  renderQuakeAlert();
  refreshMap(true);
}

function showTab(name) {
  $$('.screen').forEach((screen) => screen.classList.toggle('hidden', screen.id !== `screen-${name}`));
  $$('.nav button').forEach((button) => button.classList.toggle('active', button.dataset.tab === name));
  if (name === 'map') {
    if (realLocation) refreshMap();
    else requestLocation();
  }
}
$$('.nav button').forEach((button) => button.addEventListener('click', () => showTab(button.dataset.tab)));
$$('[data-goto]').forEach((element) => element.addEventListener('click', () => showTab(element.dataset.goto)));

let sosTimer;
$('#sosBtn').addEventListener('pointerdown', () => {
  clearTimeout(sosTimer);
  sosTimer = setTimeout(() => addFamilyMessage(t('sosMessage'), 'sos'), 3000);
});
['pointerup', 'pointerleave', 'pointercancel'].forEach((eventName) => $('#sosBtn').addEventListener(eventName, () => clearTimeout(sosTimer)));
$('#imSafeBtn').addEventListener('click', () => {
  $('#famStatus').textContent = currentLanguage === 'ru' ? '4 человека в безопасности' : currentLanguage === 'en' ? '4 people safe' : '4 kishi xavfsiz (siz qo\'shildingiz)';
  addFamilyMessage(t('safeMessage'), 'safeStatus');
});
$('#locateBtn').addEventListener('click', requestLocation);
$('#ipLocateBtn').addEventListener('click', requestIpLocation);
$('#quakeDismissBtn').addEventListener('click', () => {
  currentQuakeAlert = null;
  renderQuakeAlert();
});
$('#sendLocationBtn').addEventListener('click', () => {
  const button = $('#sendLocationBtn');
  button.disabled = true;
  if (realLocation) {
    saveLocationToFamilyChat();
    button.disabled = false;
    return;
  }
  requestLocation(
    () => { saveLocationToFamilyChat(); button.disabled = false; },
    () => { button.disabled = false; },
  );
});
$('#liveLocationBtn').addEventListener('click', () => {
  if (liveWatchId !== null) stopLiveLocation();
  else startLiveLocation();
});

$('#uploadBox').addEventListener('click', () => { $('#uploadBox').textContent = t('attached'); });
$('#reportForm').addEventListener('submit', (event) => {
  event.preventDefault();
  reports.unshift({ type: $('#repType').value, description: $('#repDesc').value.trim(), status: 'new', statusKey: 'accepted', time: new Date().toLocaleTimeString(localeNames[currentLanguage], { hour: '2-digit', minute: '2-digit' }) });
  renderReports();
  $('#repDesc').value = '';
  $('#uploadBox').textContent = t('attach');
  toast(t('sent'));
});

$('#chatForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const input = $('#chatInput');
  const messageText = input.value.trim();
  if (!messageText) return;
  let saved;
  try { saved = JSON.parse(localStorage.getItem('xavfsiz-hayot-family-chat-v1') || '{}'); }
  catch { saved = {}; }
  if (!Array.isArray(saved[currentConversation])) saved[currentConversation] = [];
  saved[currentConversation].push({ text: messageText, sentAt: new Date().toISOString() });
  try { localStorage.setItem('xavfsiz-hayot-family-chat-v1', JSON.stringify(saved)); }
  catch { toast(t('storageError')); return; }
  input.value = '';
  renderChat();
});

$('#addContactBtn').addEventListener('click', () => {
  const name = prompt(t('namePrompt'));
  if (!name?.trim()) return;
  const relation = prompt(t('relationPrompt')) || t('close');
  contacts.push({ name: name.trim(), relation: relation.trim() });
  renderContacts();
  toast(t('contactAdded'));
});
$$('.lang-toggle button').forEach((button) => button.addEventListener('click', () => {
  applyLanguage(button.dataset.lang);
  toast(t('languageChanged'));
}));

function updateClock() {
  $('#clock').textContent = new Date().toLocaleTimeString(localeNames[currentLanguage], { hour: '2-digit', minute: '2-digit' });
}
removeSpouseConversation();
endStaleLiveLocations();
applyLanguage(currentLanguage);
updateClock();
setInterval(updateClock, 15000);
if ('serviceWorker' in navigator && location.protocol !== 'file:') {
  window.addEventListener('load', () => navigator.serviceWorker.register('./service-worker.js').catch((error) => console.warn('Offline support could not be enabled:', error)));
}
