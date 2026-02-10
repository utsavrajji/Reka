import TeamCard from './team-card';
import './team-section.css';

export default function TeamSection() {
    const teamMembers = [
        { id: 1, name: 'Aarav Mehta', role: 'Creative Director', experience: '5+ Years' },
        { id: 2, name: 'Sneha Kapoor', role: 'Brand Strategist', experience: '4 Years' },
        { id: 3, name: 'Rohan Iyer', role: 'Senior Video Editor', experience: '5 Years' },
        { id: 4, name: 'Pooja Sharma', role: 'Content & Script Lead', experience: '4 Years' },
        { id: 5, name: 'Kunal Verma', role: 'Social Media Growth', experience: '5 Years' },
        { id: 6, name: 'Neha Malhotra', role: 'Lead Generation', experience: '3+ Years' },
        { id: 7, name: 'Aditya Singh', role: 'Custom Website Developer', experience: '5 Years' },
        { id: 8, name: 'Ritika Jain', role: 'UI/UX Designer', experience: '4 Years' },
        { id: 9, name: 'Vikram Rao', role: 'Photography & Lighting', experience: '5 Years' },
        { id: 10, name: 'Ananya Bose', role: 'Client Success', experience: '3+ Years' }
    ];

    return (
        <section className="team-section">
            <h2 className="team-section-title">Our Core Team</h2>
            <p className="team-section-subtitle">
                All profiles are designed to be animated for web presentation.
            </p>
            <div className="team-grid">
                {teamMembers.map((member, index) => (
                    <TeamCard
                        key={member.id}
                        name={member.name}
                        role={member.role}
                        experience={member.experience}
                        index={index}
                    />
                ))}
            </div>
        </section>
    );
}
