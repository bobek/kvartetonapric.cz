.PHONY: deploy

initial_fetch:
	wget --mirror --convert-links --adjust-extension --page-requisites --no-parent http://www.pzdm.eu/napric/index.html
deploy:
	rsync -av --progress --delete -e 'ssh -l root' ./ srv1.trusted.cz:/var/www/kvartetonapric.cz/
