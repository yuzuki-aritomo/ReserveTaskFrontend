
open-api:
	curl https://raw.githubusercontent.com/yuzuki-aritomo/ReserveTaskBackend/master/docs/swagger.yaml > swagger.yaml
	docker run --rm -v ${PWD}:/local openapitools/openapi-generator-cli generate -i /local/swagger.yaml -g typescript-fetch -o /local/types/ --additional-properties=typescriptThreePlus=true 