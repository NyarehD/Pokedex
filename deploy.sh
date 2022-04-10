#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME
echo Enter your message :
# shellcheck disable=SC2162
read message

git init
git add -A
git commit -m "$message"

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
 git push -f git@github.com:NyarehD/Pokedex.git main:gh-pages

cd -