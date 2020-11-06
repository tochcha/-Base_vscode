<?php
 /* Здесь проверяется существование переменных */
	if (isset($_POST['name'])) {$name = $_POST['name'];}
	if (isset($_POST['phone'])) {$phone = $_POST['phone'];}
	if (isset($_POST['email'])) {$email = $_POST['email'];}
	if (isset($_POST['message'])) {$message = $_POST['message'];}

/* Сюда впишите свою эл. почту */
 $address = "tochcha@gmail.com";

/* А здесь прописывается текст сообщения, \n - перенос строки */
 $mes = "Сообщение с сайта site.ru\nТелефон: $phone\nИмя: $name\nE-mail: $email\nКомментарий: $message";

/* А эта функция как раз занимается отправкой письма на указанный вами email */
$sub='Это тема'; //сабж
$email='Будет написано от кого <info@web-sputnik.info>'; // от кого почтовый ящик должен быть!
 $send = mail ($address,$sub,$mes,"Content-type:text/plain; charset = utf-8\r\nFrom:$email");

ini_set('short_open_tag', 'On');
header('Refresh: 3; URL=index.html');
?>
<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="utf-8">
    <title>Title</title>
    <meta name="description" content="">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <meta property="og:image" content="path/to/image.jpg">
    <link rel="shortcut icon" href="img/favicon/favicon.ico" type="image/x-icon">
    <link rel="apple-touch-icon" href="img/favicon/apple-touch-icon.png">
    <link rel="apple-touch-icon" sizes="72x72" href="img/favicon/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="114x114" href="img/favicon/apple-touch-icon-114x114.png">
    <link rel="stylesheet" href="css/libs.css">
    <link rel="stylesheet" href="css/main.css">
    <!-- Chrome, Firefox OS and Opera -->
    <meta name="theme-color" content="#000">
    <!-- Windows Phone -->
    <meta name="msapplication-navbutton-color" content="#000">
    <!-- iOS Safari -->
    <meta name="apple-mobile-web-app-status-bar-style" content="#000">
</head>

<body>
    <div id="my-page">
        <div id="my-header">
            <header>
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <a id="my-button" class="hamburger hamburger--arrow-r" href="#my-menu">
                                <span class="hamburger-box">
									<span class="hamburger-inner"></span>
                                </span>
                            </a>
                            <h2>Это хедер о как</h2>
                            <p>параграф</p>
                        </div>
                    </div>
                </div>
            </header>
        </div>
        <div id="my-content">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
					<div class="logo-3"><a class="sprite sprite-logo" href="/">Tochcha.com</a></div>
					<div class="subtitle">Наши специалисты свяжутся с Вами в ближайшее время.</div>
					<h1 class="h1">Ваша заявка оправлена,  <strong>спасибо!</strong></h1>
					<div class="buttonbox"><a class="button" href="/">На главную</a></div>
					</div>
				</div>
			</div>
        </div>
        <div id="my-footer">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h4>А это просто футер</h4></div>
                </div>
            </div>
        </div>
    </div>
    <nav id="my-menu">
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about/">About us</a>
                <ul>
                    <li><a href="">Очень очень длинный текст</a></li>
                    <li><a href="">Очень очень длинный текст</a></li>
                    <li><a href="">Очень очень длинный текст</a></li>
                </ul>
            </li>
            <li><a href="/contact/">Contact</a></li>
        </ul>
    </nav>
    <script src="js/libs.min.js"></script>
    <script src="js/common.js"></script>
    <script>
        $('form.ajax').submit(function(e) {
            e.preventDefault();
            $.ajax({
                url: 'mail.php',
                type: 'post',
                scriptCharset: "utf8",
                data: $('form.ajax').serialize()
            }).done(function(data) {
                $('#tutu').hide();
                $('span#tuok').show();
                $('span#tuok').text("Отправлено!");
            });
        });
    </script>
</body>
</html>