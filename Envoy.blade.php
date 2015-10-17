@servers(['tyler-sirens' => 'root@tyler-sirens.tylerwebdev.io'])

@task('deploy', ['on' => 'tyler-sirens'])
cd /home/tyler-sirens
git pull
composer install --no-dev
service nginx reload
@endtask