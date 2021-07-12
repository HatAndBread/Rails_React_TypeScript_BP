10.times do
  Test.create(name: Faker::Name.first_name, age: (1..100).to_a.sample)
end
