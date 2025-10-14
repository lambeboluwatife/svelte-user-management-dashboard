<script>
  import AddUser from "./components/AddUser.svelte";
  import UserList from "./components/UserList.svelte";

  let title = "User Management System Dashboard";

  let users = $state([
    { id: 1, name: 'Alice Baker', email: 'alicebaker@hotmail.com', role: 'admin' },
    { id: 2, name: 'Bob Smith', email: 'smithbobby@yahoomail.com', role: 'engineer'},
    { id: 3, name: 'Charlie Johnson', email: 'charles1995@gmail.com', role: 'designer' },
    { id: 4, name: 'Diana Prince', email: 'princessdiana@outlook.com', role: 'manager' },
    { id: 5, name: 'Ethan Hunt', email: 'ethanthehunter@hotmail.com', role: 'analyst' },
    { id: 6, name: 'Fiona Gallagher', email: 'princessfifi@yahoomail.com', role: 'developer' },
    { id: 7, name: 'George Lucas', email: 'georgelucas@gmail.com', role: 'director' },
    { id: 8, name: 'Hannah Montana', email: 'montanahannah@outlook.com', role: 'artist' },
    { id: 9, name: 'Ian Fleming', email: 'ianfleming@hotmail.com', role: 'writer' },
    { id: 10, name: 'Julia Roberts', email: 'juliaroberts@yahoomail.com', role: 'actress' }
  ]);

  let searchQuery = $state('');

  const addUser = (newUser) => {
    users = [...users, newUser];
  }

  const deleteUser = (id) => {
    users = users.filter(user => user.id !== id);
  }

  const editUser = (updatedUser) => {
    users = users.map(user => user.id === updatedUser.id ? updatedUser : user);
  }

  const filteredUsers = $derived(
    users.filter(user => 
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.role.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );
</script>

<main class="min-h-screen p-6 lg:p-8">
  <div class="max-w-7xl mx-auto">
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-slate-800 mb-2">{title}</h1>
      <p class="text-slate-600">Manage your team members and their roles</p>
    </div>

    <div class="mb-8">
      <AddUser {addUser} />
    </div>

    <div class="mb-6">
      <div class="relative">
        <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
        <input 
          type="text" 
          placeholder="Search users by name, email, or role..." 
          bind:value={searchQuery}
          class="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
        />
      </div>
    </div>

    <UserList users={filteredUsers} {deleteUser} {editUser} />

    <div class="mt-8 flex items-center justify-between text-sm text-slate-600">
      <p>Total Users: <span class="font-semibold text-slate-800">{users.length}</span></p>
      <p>Showing: <span class="font-semibold text-slate-800">{filteredUsers.length}</span> {filteredUsers.length === 1 ? 'user' : 'users'}</p>
    </div>
  </div>
</main>