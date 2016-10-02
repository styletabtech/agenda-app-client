# change to https://agenda-api-3000.herokuapp.com/ after testing is complete


# sign up

curl --include --request POST http://localhost:3000/sign-up \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "test@test",
      "password": "test",
      "password_confirmation": "test"
    }
  }'

#sign in

curl --include --request POST http://localhost:3000/sign-in \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "test@test",
      "password": "test"
    }
  }'

#change password

curl --include --request PATCH http://localhost:3000/change-password/6 \
  --header "Authorization: Token token=BAhJIiVlNTZjMjc0Yzk0MWU5MTNmYzY3OWUwZTdmNzVjNDc2NAY6BkVG--44cef47fc2238a46d1cbc7b1d8192771694a363b" \
  --header "Content-Type: application/json" \
  --data '{
    "passwords": {
      "old": "test",
      "new": "dia"
    }
  }'

#sign out

curl --include --request DELETE http://localhost:3000/sign-out/6 \
  --header "Authorization: Token token=BAhJIiVlNTZjMjc0Yzk0MWU5MTNmYzY3OWUwZTdmNzVjNDc2NAY6BkVG--44cef47fc2238a46d1cbc7b1d8192771694a363b"
