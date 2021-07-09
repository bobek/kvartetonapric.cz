.PHONY: deploy

deploy:
	rsync -av --progress --delete --delete-excluded --exclude=.git --exclude=Makefile -e 'ssh -l root' ./ srv1.trusted.cz:/var/www/kvartetonapric.cz/

initial_fetch:
	wget --mirror --convert-links --adjust-extension --page-requisites --no-parent http://www.pzdm.eu/napric/index.html
