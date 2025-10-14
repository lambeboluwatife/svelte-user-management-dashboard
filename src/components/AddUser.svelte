<script>
    let name = $state('');
    let email = $state('');
    let role = $state('');

    let {addUser} = $props();

    const submitForm = (e) => {
        e.preventDefault();

        const newUser = {
            id: crypto.randomUUID(),
            name,
            email,
            role
        };

        addUser(newUser);
        name = '';
        email = '';
        role = '';
    }
</script>

<div class="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
    <h2 class="text-xl font-semibold text-slate-800 mb-4">Add New User</h2>
    
    <form onsubmit={submitForm} class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div class="flex flex-col">
            <label for="name" class="text-sm font-medium text-slate-700 mb-1">Name</label>
            <input 
                id="name"
                type="text" 
                placeholder="John Doe" 
                bind:value={name} 
                required 
                class="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
        </div>

        <div class="flex flex-col">
            <label for="email" class="text-sm font-medium text-slate-700 mb-1">Email</label>
            <input 
                id="email"
                type="email" 
                placeholder="john@example.com" 
                bind:value={email} 
                required 
                class="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
        </div>

        <div class="flex flex-col">
            <label for="role" class="text-sm font-medium text-slate-700 mb-1">Role</label>
            <input 
                id="role"
                type="text" 
                placeholder="Developer" 
                bind:value={role} 
                required 
                class="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
        </div>

        <div class="flex flex-col justify-end">
            <button 
                type="submit"
                class="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md active:scale-95 transform"
            >
                Add User
            </button>
        </div>
    </form>
</div>