import './team-card.css';

export default function TeamCard({ name, role, experience, index = 0 }) {
    return (
        <div
            className="team-card"
            style={{ animationDelay: `${index * 0.1}s` }}
        >
            <div className="team-card-content">
                <h3 className="team-member-name">{name}</h3>
                <p className="team-member-role">{role}</p>
                <p className="team-member-experience">{experience}</p>
            </div>
            <div className="team-card-glow"></div>
        </div>
    );
}
