# Laravel React To Do App

An example To Do App built with Laravel 6.0(LTS) and React. It includes:

-   An auth API,
-   Routing with react-router (private, public and split routes).
-   [Database seeding]
-   A base ApiController to help return [standardized responses](https://github.com/devinsays/laravel-react-bootstrap/blob/master/docs/api-format.md).
-   Bootstrap for styling and AdminLTE.

Use it as a base for quick prototypes, Suggestions, recommendations, and pull requests welcome!

## Application Url
For better navigation please change your host to <b>http://todo.test</b>
or
replace the <b>apiDomain</b> in ressources/js/services/urlservices from todo.test to 127.0.0.1:8000

## Development Environment

This project runs on a LEMP stack (Linux, NGINX, MySQL, & PHP) OR just use Laragon to evade hosts change.

The backend built with Laravel. The frontend is 100% React.

If you don't already have a LEMP environment running, [Valet](https://laravel.com/docs/valet) is a good option for OSX.

## Set Up

#### Clone the repository:

```bash
git@github.com:medbedis/todo.git
```

#### Create your environment file:

```bash
cp .env.example .env
```

_The app key is used to salt passwords. If you need to work with production data you'll want to use the same app key as defined in the .env file in production so password hashes match._

#### Update these settings in the .env file:

-   DB_DATABASE (your local database, i.e. "todos")
-   DB_USERNAME (your local db username, i.e. "root")
-   DB_PASSWORD (your local db password, i.e. "")

#### Install PHP dependencies:

```bash
composer install
```

_If you don't have Composer installed, [instructions here](https://getcomposer.org/)._

#### Generate an app key:

```bash
php artisan key:generate
```


#### Run the database migrations:

```bash
php artisan migrate
```

#### Install Javascript dependencies:

```bash
npm install
```

_If you don't have Node and NPM installed, [instructions here](https://www.npmjs.com/get-npm)._

#### Run an initial build:

```bash
npm run dev
```

### Additional Set Up Tips

#### Database Seeding

If you need sample data to work with, you can seed the database:

```
php artisan db:seeed --class=TodoTableSeeder
```

Read more in [/docs/database-seeds.md](https://github.com/devinsays/laravel-react-bootstrap/blob/master/docs/database-seeds.md).

