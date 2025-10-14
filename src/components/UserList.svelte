<script>
    let { users, deleteUser, editUser } = $props();
    let editingId = $state(null);
    let editForm = $state({ name: '', email: '', role: '' });

    const startEdit = (user) => {
        editingId = user.id;
        editForm = { name: user.name, email: user.email, role: user.role };
    }

    const cancelEdit = () => {
        editingId = null;
        editForm = { name: '', email: '', role: '' };
    }

    const saveEdit = (id) => {
        editUser({ id, ...editForm });
        cancelEdit();
    }

    const getRoleBadgeColor = (role) => {
        const colors = {
            admin: 'bg-purple-100 text-purple-700',
            manager: 'bg-blue-100 text-blue-700',
            developer: 'bg-green-100 text-green-700',
            engineer: 'bg-teal-100 text-teal-700',
            designer: 'bg-pink-100 text-pink-700',
            analyst: 'bg-orange-100 text-orange-700',
            default: 'bg-slate-100 text-slate-700'
        };
        return colors[role.toLowerCase()] || colors.default;
    }
</script>

<div class="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
    {#if users.length === 0}
        <div class="p-12 text-center">
            <svg class="mx-auto h-12 w-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
            </svg>
            <p class="mt-4 text-slate-600">No users found</p>
        </div>
    {:else}
        <div class="overflow-x-auto">
            <table class="w-full">
                <thead class="bg-slate-50 border-b border-slate-200">
                    <tr>
                        <th class="px-6 py-3 text-left text-xs font-medium text-slate-700 uppercase tracking-wider">Name</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-slate-700 uppercase tracking-wider">Email</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-slate-700 uppercase tracking-wider">Role</th>
                        <th class="px-6 py-3 text-right text-xs font-medium text-slate-700 uppercase tracking-wider">Actions</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-200">
                    {#each users as user (user.id)}
                        <tr class="hover:bg-slate-50 transition-colors">
                            {#if editingId === user.id}
                                <td class="px-6 py-4">
                                    <input 
                                        type="text" 
                                        bind:value={editForm.name}
                                        class="w-full px-3 py-1 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </td>
                                <td class="px-6 py-4">
                                    <input 
                                        type="email" 
                                        bind:value={editForm.email}
                                        class="w-full px-3 py-1 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </td>
                                <td class="px-6 py-4">
                                    <input 
                                        type="text" 
                                        bind:value={editForm.role}
                                        class="w-full px-3 py-1 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </td>
                                <td class="px-6 py-4 text-right">
                                    <button 
                                        onclick={() => saveEdit(user.id)}
                                        class="text-green-600 hover:text-green-800 font-medium mr-3 transition-colors"
                                    >
                                        Save
                                    </button>
                                    <button 
                                        onclick={cancelEdit}
                                        class="text-slate-600 hover:text-slate-800 font-medium transition-colors"
                                    >
                                        Cancel
                                    </button>
                                </td>
                            {:else}
                                <td class="px-6 py-4">
                                    <div class="text-sm font-medium text-slate-900">{user.name}</div>
                                </td>
                                <td class="px-6 py-4">
                                    <div class="text-sm text-slate-600">{user.email}</div>
                                </td>
                                <td class="px-6 py-4">
                                    <span class="inline-flex px-3 py-1 text-xs font-semibold rounded-full {getRoleBadgeColor(user.role)}">
                                        {user.role}
                                    </span>
                                </td>
                                <td class="px-6 py-4 text-right space-x-2">
                                    <button 
                                        onclick={() => startEdit(user)}
                                        class="inline-flex items-center px-3 py-1 text-sm text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded transition-colors"
                                    >
                                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                                        </svg>
                                        Edit
                                    </button>
                                    <button 
                                        onclick={() => deleteUser(user.id)}
                                        class="inline-flex items-center px-3 py-1 text-sm text-red-600 hover:text-red-800 hover:bg-red-50 rounded transition-colors"
                                    >
                                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                                        </svg>
                                        Delete
                                    </button>
                                </td>
                            {/if}
                        </tr>
                    {/each}
                </tbody>
            </table>
        </div>
    {/if}
</div>