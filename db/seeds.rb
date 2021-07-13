def get_info
  { name: Faker::Name.first_name, age: (1..100).to_a.sample }
end
10.times do
  parent = Test.create(get_info)
  10.times do
    child = Child.new(get_info)
    child.test = parent
    child.save!
    10.times do
      grand_child = GrandChild.new(get_info)
      grand_child.child = child
      grand_child.save!
    end
  end
end
