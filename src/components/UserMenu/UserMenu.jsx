export default function UserMenu({ user, onLogout }) {
  return (
    <div>
      <span>{user.email}</span> <button onClick={onLogout}>Logout</button>
    </div>
  );
}
