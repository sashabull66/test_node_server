run:
	docker run -d --rm -p 3000:4300 --name SSS --env-file ./config/.env testimage
ps:
	docker ps
stop:
	docker stop SSS