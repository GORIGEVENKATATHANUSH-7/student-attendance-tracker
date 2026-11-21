import "./App.css";

const students = [
  { id: "49027", name: "Thanush", course: "Computer Science", attendance: 92 },
  { id: "49044", name: "Rehaman", course: "Business Administration", attendance: 78 },
  { id: "49040", name: "Ashwith", course: "Data Science", attendance: 85 },
  { id: "49041", name: "Sowmya", course: "Graphic Design", attendance: 64 },
];

function StudentCard({ name, id, course, attendance }) {
  const attendanceClass =
    attendance >= 85 ? "good" : attendance >= 75 ? "average" : "low";

  return (
    <article className="student-card">
      <div className="student-heading">
        <div className="avatar">{name.charAt(0)}</div>
        <div>
          <h2>{name}</h2>
          <p className="student-id">{id}</p>
        </div>
      </div>

      <div className="course">
        <span>Course</span>
        <strong>{course}</strong>
      </div>

      <div className="attendance">
        <div className="attendance-label">
          <span>Attendance</span>
          <strong className={attendanceClass}>{attendance}%</strong>
        </div>
        <div
          className="progress-track"
          role="progressbar"
          aria-label={`${name}'s attendance`}
          aria-valuenow={attendance}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div
            className={`progress-fill ${attendanceClass}`}
            style={{ width: `${attendance}%` }}
          />
        </div>
      </div>
    </article>
  );
}

function App() {
  return (
    <main className="page">
      <header className="page-header">
        <div>
          <p className="eyebrow">STUDENT MANAGEMENT</p>
          <h1>Attendance Tracker</h1>
          <p className="subtitle">A quick overview of student attendance.</p>
        </div>
        <div className="student-count">
          <strong>{students.length}</strong>
          <span>Students</span>
        </div>
      </header>

      <section className="student-grid" aria-label="Student attendance list">
        {students.map((student) => (
          <StudentCard key={student.id} {...student} />
        ))}
      </section>

      <p className="legend">
        <span className="dot good-dot" /> 85%+ Good
        <span className="dot average-dot" /> 75–84% Average
        <span className="dot low-dot" /> Below 75% Low
      </p>
    </main>
  );
}

export default App;