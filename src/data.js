const recipes = [
    {
      name: 'Creamy Tomato Pasta',
      chef: 'Chef Antonio',
      totalRatings: 120,
      avgRating: 4.5,
      uploadedOn: '2022-01-01',
      mealType: 'Lunch',
      dishType: 'Pasta',
      testKitchenApproved: true,
      contestWinner: false,
      featured: true,
      description: 'A classic Italian dish with a creamy twist.',
      imgUrl: 'https://www.theburntbuttertable.com/wp-content/uploads/2024/03/Creamy-Tomato-Pasta-1-2.jpg'
    },
    {
      name: 'Spicy Chicken Wings',
      chef: 'Chef Maria',
      totalRatings: 90,
      avgRating: 4.2,
      uploadedOn: '2022-02-01',
      mealType: 'Snack',
      dishType: 'Chicken',
      testKitchenApproved: true,
      contestWinner: false,
      featured: false,
      description: 'Crispy chicken wings with a spicy kick.',
      imgUrl: 'https://media.istockphoto.com/id/185274327/photo/picture-of-hot-spicy-buffalo-wings.webp?a=1&b=1&s=612x612&w=0&k=20&c=Bbnp-n0VzhiUPMEbrQ1dtQBOIgc1z3I1GbCJKz9gxKs='
    },
    {
      name: 'Veggie Stir-Fry',
      chef: 'Chef Li',
      totalRatings: 60,
      avgRating: 4.0,
      uploadedOn: '2022-03-01',
      mealType: 'Dinner',
      dishType: 'Vegetarian',
      testKitchenApproved: false,
      contestWinner: false,
      featured: false,
      description: 'A colorful and flavorful stir-fry with a variety of vegetables.',
      imgUrl: 'https://media.istockphoto.com/id/2159018476/photo/vegetable-fried-rice.jpg?s=1024x1024&w=is&k=20&c=Fgs9Li8SQ7JoNR0l5qpDD2AYRtyQ3uySkZC-pa9sEFo='
    },
    {
      name: 'Beef Tacos',
      chef: 'Chef Carlos',
      totalRatings: 80,
      avgRating: 4.1,
      uploadedOn: '2022-04-01',
      mealType: 'Dinner',
      dishType: 'Mexican',
      testKitchenApproved: true,
      contestWinner: false,
      featured: false,
      description: 'Juicy beef tacos with fresh toppings.',
      imgUrl: 'https://media.istockphoto.com/id/1333647378/photo/homemade-american-soft-shell-beef-tacos.webp?a=1&b=1&s=612x612&w=0&k=20&c=VlHsqxCFAxTsBujWRbEk30gRpEr8q5CGQVxar3OUb78='
    },
    {
      name: 'Chicken Quesadilla',
      chef: 'Chef Maria',
      totalRatings: 70,
      avgRating: 4.0,
      uploadedOn: '2022-05-01',
      mealType: 'Lunch',
      dishType: 'Mexican',
      testKitchenApproved: false,
      contestWinner: false,
      featured: false,
      description: 'A crispy and cheesy chicken quesadilla.',
      imgUrl: 'https://media.istockphoto.com/id/912716508/photo/quesadilla-with-sauces.webp?a=1&b=1&s=612x612&w=0&k=20&c=p808EWtfIoAd5M_2m4hlHp-kCecvjy3vgFsO00O2IIE='
    },
    {
      name: 'Baked Salmon',
      chef: 'Chef Li',
      totalRatings: 60,
      avgRating: 4.0,
      uploadedOn: '2022-06-01',
      mealType: 'Dinner',
      dishType: 'Seafood',
      testKitchenApproved: true,
      contestWinner: false,
      featured: false,
      description: 'Fresh salmon baked to perfection.',
      imgUrl: 'https://media.istockphoto.com/id/1214416414/photo/barbecued-salmon-fried-potatoes-and-vegetables-on-wooden-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=AgidLz6RYOwAgDjKVOfDQhR6ePaRIRR6fcIM5Fp9P0A='
    },
    {
      name: 'Chicken Fajitas',
      chef: 'Chef Carlos',
      totalRatings: 80,
      avgRating: 4.1,
      uploadedOn: '2022-07-01',
      mealType: 'Dinner',
      dishType: 'Mexican',
      testKitchenApproved: true,
      contestWinner: false,
      featured: false,
      description: 'Sizzling chicken fajitas with fresh peppers.',
      imgUrl: 'https://media.istockphoto.com/id/1277397662/photo/mexican-food-chicken-fajita-top-down-photo-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=yW9otujh_sc4E4YEbMD_GHy-yUUCdCecbZzRcncriF4='
    },
    {
      name: 'Veggie Burgers',
      chef: 'Chef Li',
      totalRatings: 60,
      avgRating: 4.0,
      uploadedOn: '2022-08-01',
      mealType: 'Lunch',
      dishType: 'Vegetarian',
      testKitchenApproved: false,
      contestWinner: false,
      featured: false,
      description: 'Juicy veggie burgers with fresh toppings.',
      imgUrl: 'https://media.istockphoto.com/id/534321264/photo/gourmet-veggie-burger-with-red-skin-fries.webp?a=1&b=1&s=612x612&w=0&k=20&c=IlNgDagpZsmFgB9HwGZHvoQpsbwFTU6M-8VNvcvD8go='
    },
    {
      name: 'Chicken Parmesan',
      chef: 'Chef Antonio',
      totalRatings: 100,
      avgRating: 4.3,
      uploadedOn: '2022-09-01',
      mealType: 'Dinner',
      dishType: 'Italian',
      testKitchenApproved: true,
      contestWinner: false,
      featured: true,
      description: 'Breaded and fried chicken topped with marinara sauce and melted mozzarella cheese.',
      imgUrl: 'https://media.istockphoto.com/id/2183093272/photo/chicken-parmesan-pasta.webp?a=1&b=1&s=612x612&w=0&k=20&c=1fFkRzme6gfQi7uD26kYL-a4w-szUd-7J3CgwvHCWbI='
    },
    {
        name: 'Shrimp Scampi',
        chef: 'Chef Li',
        totalRatings: 80,
        avgRating: 4.1,
        uploadedOn: '2022-10-01',
        mealType: 'Dinner',
        dishType: 'Seafood',
        testKitchenApproved: true,
        contestWinner: false,
        featured: false,
        description: 'Succulent shrimp cooked in garlic butter and served with linguine.',
        imgUrl: 'https://media.istockphoto.com/id/1414307299/photo/closeup-garlic-butter-shrimp-in-pan.webp?a=1&b=1&s=612x612&w=0&k=20&c=RcXKgoUJc1exWAGC-mPBCQY6IXVY1qxARs_8sP_zOGE='
      },
      {
        name: 'Chicken Tikka Masala',
        chef: 'Chef Carlos',
        totalRatings: 90,
        avgRating: 4.2,
        uploadedOn: '2022-11-01',
        mealType: 'Dinner',
        dishType: 'Indian',
        testKitchenApproved: true,
        contestWinner: false,
        featured: false,
        description: 'Tender chicken cooked in a rich and creamy tomato sauce.',
        imgUrl: 'https://media.istockphoto.com/id/1168509766/photo/chicken-tikka-masala.webp?a=1&b=1&s=612x612&w=0&k=20&c=-WYkoiwNVS8-Ep8xSMGVU7fdrhVGnbInzvuhw1z6Rd0='
      },
      {
        name: 'Grilled Salmon with Lemon',
        chef: 'Chef Emma',
        totalRatings: 80,
        avgRating: 4.3,
        uploadedOn: '2022-04-01',
        mealType: 'Dinner',
        dishType: 'Seafood',
        testKitchenApproved: true,
        contestWinner: false,
        featured: false,
        description: 'Fresh salmon grilled to perfection with a squeeze of lemon.',
        imgUrl: 'https://media.istockphoto.com/id/1214416414/photo/barbecued-salmon-fried-potatoes-and-vegetables-on-wooden-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=AgidLz6RYOwAgDjKVOfDQhR6ePaRIRR6fcIM5Fp9P0A='
      },
      {
        name: 'Roasted Vegetable Soup',
        chef: 'Chef Liam',
        totalRatings: 70,
        avgRating: 4.2,
        uploadedOn: '2022-05-01',
        mealType: 'Lunch',
        dishType: 'Vegetarian',
        testKitchenApproved: false,
        contestWinner: false,
        featured: false,
        description: 'A hearty soup made with roasted vegetables and a hint of spice.',
        imgUrl: 'https://media.istockphoto.com/id/1056791178/photo/vegetable-soup-with-lemon-and-chickpeas.webp?a=1&b=1&s=612x612&w=0&k=20&c=4dILwhjof1WTfE2_T3YGuoU1mnA86_ciQcfuxVxJDOA='
      },
      {
        name: 'Korean-Style BBQ Beef',
        chef: 'Chef Sophia',
        totalRatings: 90,
        avgRating: 4.5,
        uploadedOn: '2022-06-01',
        mealType: 'Dinner',
        dishType: 'Beef',
        testKitchenApproved: true,
        contestWinner: true,
        featured: true,
        description: 'Marinated beef short ribs grilled to perfection with a sweet and spicy Korean-inspired BBQ sauce.',
        imgUrl: 'https://media.istockphoto.com/id/187095108/photo/bulgogi.webp?a=1&b=1&s=612x612&w=0&k=20&c=_tskYylWNwTV0RzUhno9MT6Ay6InUmMKiKm7Mhh5CTg='
      },
      {
        name: 'Vegan Chocolate Chip Cookies',
        chef: 'Chef Ava',
        totalRatings: 60,
        avgRating: 4.1,
        uploadedOn: '2022-07-01',
        mealType: 'Snack',
        dishType: 'Vegan',
        testKitchenApproved: false,
        contestWinner: false,
        featured: false,
        description: 'Soft-baked cookies made with vegan chocolate chips and a hint of vanilla.',
        imgUrl: 'https://images.unsplash.com/photo-1609857570980-1b6eea7b3af3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8VmVnYW4lMjBDaG9jb2xhdGUlMjBDaGlwJTIwQ29va2llc3xlbnwwfHwwfHx8MA%3D%3D'
      },
    ];
    
export default recipes;