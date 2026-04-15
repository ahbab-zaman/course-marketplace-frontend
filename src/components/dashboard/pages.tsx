import {
  ActionTiles,
  DashboardGrid,
  DashboardHero,
  MetricGrid,
  OverviewBoard,
  Panel,
  ProgressList,
  QuickList,
  SummaryList,
  TableCard,
  type MetricItem,
} from "./content";
import { ROUTES } from "@/constants/routes";

const studentMetrics: MetricItem[] = [
  {
    label: "Learning streak",
    value: "18 days",
    detail: "You are holding steady with four focused sessions this week.",
    icon: "bolt",
  },
  {
    label: "Courses in motion",
    value: "6",
    detail: "Three are above the halfway mark and ready for a final push.",
    icon: "menu_book",
  },
  {
    label: "Hours watched",
    value: "42h",
    detail: "Watch time is up 14% compared to the previous month.",
    icon: "schedule",
  },
  {
    label: "Certificates earned",
    value: "9",
    detail: "Two new completions are ready to share this week.",
    icon: "workspace_premium",
  },
];

const instructorMetrics: MetricItem[] = [
  {
    label: "Published courses",
    value: "12",
    detail: "Eight are actively enrolling and four are queued for updates.",
    icon: "school",
  },
  {
    label: "Active students",
    value: "1,248",
    detail: "Steady engagement across recurring cohorts and new launches.",
    icon: "groups",
  },
  {
    label: "Monthly revenue",
    value: "$18.4k",
    detail: "Performance is ahead of plan with stronger bundle conversions.",
    icon: "payments",
  },
  {
    label: "Average rating",
    value: "4.8",
    detail: "Learner satisfaction remains consistent after the latest refresh.",
    icon: "star",
  },
];

const adminMetrics: MetricItem[] = [
  {
    label: "Platform members",
    value: "18.2k",
    detail: "Learner growth is strongest in development and business tracks.",
    icon: "group",
  },
  {
    label: "Live courses",
    value: "326",
    detail: "Thirty-one new submissions are waiting for quality review.",
    icon: "school",
  },
  {
    label: "Gross revenue",
    value: "$264k",
    detail: "Revenue is pacing 19% above the same period last quarter.",
    icon: "bar_chart",
  },
  {
    label: "Open escalations",
    value: "7",
    detail: "Most reports are low severity and tied to content moderation.",
    icon: "notification_important",
  },
];

export function UserDashboardContent() {
  return (
    <div className="space-y-5">
      <OverviewBoard
        eyebrow="Student overview"
        title="Welcome back"
        description="Your learning dashboard is now spaced like a proper workspace: clear progress, focused actions, and a faster path back into the courses that matter this week."
        metrics={studentMetrics}
        chartTitle="Weekly study flow"
        chartValue="12.4h"
        chartDelta="+18%"
        chartRange="Last 7 days"
        chartBars={[48, 32, 66, 74, 35, 58, 41]}
        primaryAction={{ label: "Browse new courses", href: ROUTES.COURSES }}
        secondaryAction={{ label: "Review progress", href: ROUTES.USER_PROGRESS }}
      />
      <DashboardGrid>
        <Panel
          title="Recent learning"
          description="Resume the sessions closest to completion without scanning a crowded list."
          className="xl:col-span-6"
        >
          <SummaryList
            title="Continue"
            items={[
              {
                label: "Advanced React Patterns",
                detail: "Next: compound components and state charts",
                value: "78%",
              },
              {
                label: "Design Systems in Practice",
                detail: "Next: token strategy and component audits",
                value: "54%",
              },
              {
                label: "SQL for Product Teams",
                detail: "Next: cohort retention and funnel analysis",
                value: "39%",
              },
            ]}
          />
        </Panel>
        <Panel
          title="Spending plan"
          description="Saved items grouped like lightweight action cards so the next purchase is easy to compare."
          className="xl:col-span-6"
        >
          <ActionTiles
            items={[
              {
                title: "Download certificates",
                description: "Collect verified completion documents and shareable badges.",
                href: ROUTES.USER_CERTIFICATES,
                icon: "download",
              },
              {
                title: "Check purchase history",
                description: "Find invoices, payment statuses, and recent orders.",
                href: ROUTES.USER_ORDERS,
                icon: "receipt_long",
              },
              {
                title: "Curate your wishlist",
                description: "Save high-value courses for your next learning block.",
                href: ROUTES.USER_WISHLIST,
                icon: "favorite",
              },
            ]}
          />
        </Panel>
      </DashboardGrid>
      <DashboardGrid>
        <Panel
          title="Progress overview"
          description="Active courses stay visible with enough room for context and progress."
          className="xl:col-span-7"
        >
          <ProgressList
            items={[
              {
                label: "Advanced React Patterns",
                detail: "42 minutes left to reach the capstone lesson.",
                value: "78%",
                progress: 78,
              },
              {
                label: "Design Systems in Practice",
                detail: "Two assignments remain in the documentation block.",
                value: "54%",
                progress: 54,
              },
              {
                label: "SQL for Product Teams",
                detail: "Keep momentum by finishing the analysis lesson set.",
                value: "39%",
                progress: 39,
              },
            ]}
          />
        </Panel>
        <Panel
          title="Latest activity"
          description="A compact feed of changes that matter this week."
          className="xl:col-span-5"
        >
          <QuickList
            items={[
              {
                title: "Completed Module 4 in Advanced React Patterns",
                detail: "State colocation and form orchestration",
                meta: "2 hours ago",
                tone: "positive",
              },
              {
                title: "Saved Growth Product Strategy to wishlist",
                detail: "Flagged for the next billing cycle",
                meta: "Yesterday",
              },
              {
                title: "Certificate issued for UI Writing Essentials",
                detail: "Ready to download or share",
                meta: "2 days ago",
                tone: "positive",
              },
            ]}
          />
        </Panel>
      </DashboardGrid>
    </div>
  );
}

export function UserCoursesContent() {
  return (
    <div className="space-y-5">
      <DashboardHero
        eyebrow="My courses"
        title="Keep active classes organized."
        description="This view separates in-progress work from completed content so the next lesson, time spent, and completion state stay obvious on tablet and mobile."
        primaryAction={{ label: "Explore catalog", href: ROUTES.COURSES }}
      />
      <Panel
        title="Course library"
        description="Current enrollments sorted by momentum and completion."
      >
        <TableCard
          columns={["Course", "Status", "Progress", "Next step"]}
          rows={[
            ["Advanced React Patterns", "In progress", "78%", "Finish Module 5"],
            ["Design Systems in Practice", "In progress", "54%", "Audit token structure"],
            ["SQL for Product Teams", "In progress", "39%", "Build funnel query"],
            ["UI Writing Essentials", "Completed", "100%", "Download certificate"],
          ]}
        />
      </Panel>
    </div>
  );
}

export function UserProgressContent() {
  return (
    <div className="space-y-5">
      <MetricGrid
        items={[
          studentMetrics[0],
          studentMetrics[1],
          {
            label: "Weekly target",
            value: "5 / 6 hrs",
            detail: "One more focused session completes this week's goal.",
            icon: "timer",
          },
          {
            label: "Completion rate",
            value: "83%",
            detail: "You are closing courses faster than last month.",
            icon: "task_alt",
          },
        ]}
      />
      <Panel
        title="Progress by course"
        description="The highest-value next moves are surfaced first."
      >
        <ProgressList
          items={[
            {
              label: "Advanced React Patterns",
              detail: "Watch 42 minutes to reach the capstone.",
              value: "78%",
              progress: 78,
            },
            {
              label: "Design Systems in Practice",
              detail: "Two assignments remain in the documentation section.",
              value: "54%",
              progress: 54,
            },
            {
              label: "SQL for Product Teams",
              detail: "Keep momentum by finishing the analysis block.",
              value: "39%",
              progress: 39,
            },
          ]}
        />
      </Panel>
    </div>
  );
}

export function UserCertificatesContent() {
  return (
    <div className="space-y-5">
      <Panel
        title="Certificate archive"
        description="Verified completions formatted for download, sharing, and profile use."
      >
        <TableCard
          columns={["Certificate", "Issued", "Credential", "Action"]}
          rows={[
            ["UI Writing Essentials", "Apr 12", "CM-UI-8842", "Download PDF"],
            ["Intro to Product Discovery", "Mar 28", "CM-PD-7731", "Share link"],
            ["Figma Systems Fundamentals", "Mar 09", "CM-FG-5480", "Download PDF"],
          ]}
        />
      </Panel>
    </div>
  );
}

export function UserWishlistContent() {
  return (
    <div className="space-y-5">
      <Panel
        title="Saved for later"
        description="Wishlist items use the same responsive card rhythm as the rest of the dashboard."
      >
        <ActionTiles
          items={[
            {
              title: "Growth Product Strategy",
              description: "A practical roadmap for pricing, packaging, and retention.",
              href: ROUTES.COURSE_DETAIL("growth-product-strategy"),
              icon: "rocket_launch",
            },
            {
              title: "AI Workflow Systems",
              description: "Hands-on course focused on operationalizing LLM tooling.",
              href: ROUTES.COURSE_DETAIL("ai-workflow-systems"),
              icon: "auto_awesome",
            },
            {
              title: "Creative Direction for Brands",
              description: "A sharper visual systems course for multidisciplinary teams.",
              href: ROUTES.COURSE_DETAIL("creative-direction-for-brands"),
              icon: "palette",
            },
          ]}
        />
      </Panel>
    </div>
  );
}

export function UserOrdersContent() {
  return (
    <div className="space-y-5">
      <Panel
        title="Orders and invoices"
        description="Purchases, billing records, and receipt retrieval in one place."
      >
        <TableCard
          columns={["Order", "Date", "Amount", "Status"]}
          rows={[
            ["#CM-2041", "Apr 15", "$79.00", "Paid"],
            ["#CM-1988", "Apr 03", "$49.00", "Paid"],
            ["#CM-1842", "Mar 17", "$129.00", "Refunded"],
          ]}
        />
      </Panel>
    </div>
  );
}

export function UserSettingsContent() {
  return (
    <div className="space-y-5">
      <Panel
        title="Account settings"
        description="A mobile-friendly overview of the controls learners look for most."
      >
        <QuickList
          items={[
            {
              title: "Profile and headline",
              detail: "Keep your public learner profile current across certificates.",
              meta: "Edit profile",
            },
            {
              title: "Password and login methods",
              detail: "Review password health and any connected sign-in providers.",
              meta: "Security",
              tone: "warning",
            },
            {
              title: "Email preferences",
              detail: "Choose reminders for expiring progress streaks and launches.",
              meta: "Notifications",
            },
          ]}
        />
      </Panel>
    </div>
  );
}

export function InstructorDashboardContent() {
  return (
    <div className="space-y-5">
      <OverviewBoard
        eyebrow="Instructor overview"
        title="Welcome back"
        description="Your instructor workspace now mirrors the cleaner finance-style layout: lighter cards, one clear chart surface, and faster access to launches, reviews, and revenue."
        metrics={instructorMetrics}
        chartTitle="Revenue performance"
        chartValue="$18.4k"
        chartDelta="+12%"
        chartRange="This month"
        chartBars={[36, 44, 58, 72, 49, 68, 54]}
        primaryAction={{
          label: "Create new course",
          href: ROUTES.INSTRUCTOR_CREATE_COURSE,
        }}
        secondaryAction={{
          label: "Open analytics",
          href: ROUTES.INSTRUCTOR_ANALYTICS,
        }}
      />
      <DashboardGrid>
        <Panel
          title="Course pipeline"
          description="Publishing work stays readable with stronger hierarchy and less stacking."
          className="xl:col-span-6"
        >
          <SummaryList
            title="Pipeline"
            items={[
              {
                label: "Advanced Product Strategy",
                detail: "Launch window confirmed, pricing review pending",
                value: "Scheduled",
              },
              {
                label: "Design Systems in Practice",
                detail: "Three learner questions need replies in resources",
                value: "Needs attention",
              },
              {
                label: "AI Workflow Systems",
                detail: "Public pricing page is driving stronger conversion",
                value: "Trending",
              },
            ]}
          />
        </Panel>
        <Panel
          title="Teaching shortcuts"
          description="Frequently used instructor actions surfaced as cards."
          className="xl:col-span-6"
        >
          <ActionTiles
            items={[
              {
                title: "Review student activity",
                description: "Spot drop-off moments and cohort engagement changes.",
                href: ROUTES.INSTRUCTOR_STUDENTS,
                icon: "groups",
              },
              {
                title: "Respond to reviews",
                description: "Turn feedback into clear next improvements.",
                href: ROUTES.INSTRUCTOR_REVIEWS,
                icon: "rate_review",
              },
              {
                title: "Track payouts",
                description: "Stay current on cash flow and payout windows.",
                href: ROUTES.INSTRUCTOR_EARNINGS,
                icon: "account_balance_wallet",
              },
            ]}
          />
        </Panel>
      </DashboardGrid>
    </div>
  );
}

export function InstructorCoursesContent() {
  return (
    <Panel
      title="Course inventory"
      description="Published, draft, and scheduled courses shown in a dense but readable table."
    >
      <TableCard
        columns={["Course", "Visibility", "Students", "Revenue"]}
        rows={[
          ["AI Workflow Systems", "Published", "412", "$6,420"],
          ["Design Systems in Practice", "Published", "298", "$4,110"],
          ["Advanced Product Strategy", "Scheduled", "Waitlist 93", "$0"],
          ["Creative Direction Sprint", "Draft", "-", "-"],
        ]}
      />
    </Panel>
  );
}

export function InstructorCreateCourseContent() {
  return (
    <div className="space-y-5">
      <DashboardHero
        eyebrow="Course builder"
        title="Launch-ready authoring steps."
        description="This page is structured around the actual publishing flow: concept, curriculum, assets, pricing, and launch checks. The layout is compressed for tablets without losing hierarchy."
      />
      <ActionTiles
        items={[
          {
            title: "Outline curriculum",
            description: "Define modules, outcomes, and pacing before recording.",
            href: ROUTES.INSTRUCTOR_CREATE_COURSE,
            icon: "checklist",
          },
          {
            title: "Upload media plan",
            description: "Organize hero art, thumbnails, and lecture structure.",
            href: ROUTES.INSTRUCTOR_CREATE_COURSE,
            icon: "video_library",
          },
          {
            title: "Set pricing and launch",
            description: "Tune discounts, enrollment windows, and review notes.",
            href: ROUTES.INSTRUCTOR_CREATE_COURSE,
            icon: "sell",
          },
        ]}
      />
    </div>
  );
}

export function InstructorStudentsContent() {
  return (
    <Panel
      title="Student cohorts"
      description="Engagement and completion patterns across the most active classes."
    >
      <TableCard
        columns={["Cohort", "Active students", "Completion", "Trend"]}
        rows={[
          ["AI Workflow Systems / Apr", "142", "68%", "Up 12%"],
          ["Design Systems in Practice / Mar", "88", "74%", "Stable"],
          ["Product Strategy / Waitlist", "93", "Pre-launch", "Growing"],
        ]}
      />
    </Panel>
  );
}

export function InstructorAnalyticsContent() {
  return (
    <div className="space-y-5">
      <MetricGrid
        items={[
          instructorMetrics[1],
          instructorMetrics[2],
          {
            label: "Completion lift",
            value: "+9%",
            detail: "Completion improved after the last lesson restructuring.",
            icon: "analytics",
          },
          {
            label: "Refund rate",
            value: "2.1%",
            detail: "Low refund pressure across bundled enrollments.",
            icon: "currency_exchange",
          },
        ]}
      />
      <Panel
        title="Performance snapshot"
        description="A high-level analytics view until live charts are connected."
      >
        <QuickList
          items={[
            {
              title: "Strongest conversion source",
              detail: "Public pricing page outperformed direct referral traffic.",
              meta: "Pricing page",
              tone: "positive",
            },
            {
              title: "Largest watch-time drop",
              detail: "Module 3 of Design Systems in Practice needs a tighter edit.",
              meta: "Needs review",
              tone: "warning",
            },
            {
              title: "Best performing bundle",
              detail: "AI Workflow Systems plus Product Strategy conversion rose 17%.",
              meta: "Bundle up",
              tone: "positive",
            },
          ]}
        />
      </Panel>
    </div>
  );
}

export function InstructorReviewsContent() {
  return (
    <Panel
      title="Recent reviews"
      description="Feedback grouped for fast response and course refinement."
    >
      <QuickList
        items={[
          {
            title: '"Excellent pacing and real-world examples."',
            detail: "AI Workflow Systems · from Sara M.",
            meta: "5 stars",
            tone: "positive",
          },
          {
            title: '"Module 3 could be tighter."',
            detail: "Design Systems in Practice · from Kelvin R.",
            meta: "Actionable",
            tone: "warning",
          },
          {
            title: '"Would love a worksheet for the pricing section."',
            detail: "Advanced Product Strategy · from Nadia T.",
            meta: "Feature request",
          },
        ]}
      />
    </Panel>
  );
}

export function InstructorEarningsContent() {
  return (
    <Panel
      title="Revenue and payouts"
      description="Monthly cash flow, payout timing, and product mix."
    >
      <TableCard
        columns={["Period", "Gross", "Platform fees", "Payout status"]}
        rows={[
          ["April", "$18,420", "$2,763", "Scheduled Apr 30"],
          ["March", "$16,870", "$2,531", "Paid"],
          ["February", "$14,230", "$2,135", "Paid"],
        ]}
      />
    </Panel>
  );
}

export function InstructorSettingsContent() {
  return (
    <Panel
      title="Instructor settings"
      description="Payout, profile, and communication controls grouped by task."
    >
      <QuickList
        items={[
          {
            title: "Public instructor profile",
            detail: "Refresh your bio, proof points, and teaching links.",
            meta: "Profile",
          },
          {
            title: "Payout method",
            detail: "Validate banking details before the next payout cycle.",
            meta: "Billing",
            tone: "warning",
          },
          {
            title: "Student notifications",
            detail: "Tune alert frequency for enrollments, reviews, and Q&A.",
            meta: "Notifications",
          },
        ]}
      />
    </Panel>
  );
}

export function AdminDashboardContent() {
  return (
    <div className="space-y-5">
      <OverviewBoard
        eyebrow="Admin overview"
        title="Welcome back"
        description="The admin area now uses the same open, reference-driven dashboard pattern with breathable cards, a primary chart surface, and cleaner moderation visibility."
        metrics={adminMetrics}
        chartTitle="Platform revenue"
        chartValue="$264k"
        chartDelta="+19%"
        chartRange="Quarter to date"
        chartBars={[28, 46, 41, 67, 58, 71, 63]}
        primaryAction={{ label: "Review users", href: ROUTES.ADMIN_USERS }}
        secondaryAction={{ label: "Open analytics", href: ROUTES.ADMIN_ANALYTICS }}
      />
      <DashboardGrid>
        <Panel
          title="Priority queue"
          description="Operational tasks are grouped in a calmer list instead of one dense admin stack."
          className="xl:col-span-6"
        >
          <SummaryList
            title="Attention"
            items={[
              {
                label: "Course submissions",
                detail: "31 items waiting on thumbnail and curriculum checks",
                value: "Moderation",
              },
              {
                label: "Payout exceptions",
                detail: "Bank verification failed for one instructor account",
                value: "Finance",
              },
              {
                label: "Retention signal",
                detail: "First-week retention improved after onboarding changes",
                value: "Positive",
              },
            ]}
          />
        </Panel>
        <Panel
          title="Admin shortcuts"
          description="Fast access to the busiest management areas."
          className="xl:col-span-6"
        >
          <ActionTiles
            items={[
              {
                title: "Moderate course catalog",
                description: "Approve or reject submissions with clearer context.",
                href: ROUTES.ADMIN_COURSES,
                icon: "rule",
              },
              {
                title: "Inspect payment health",
                description: "Check failed transactions, payouts, and refunds.",
                href: ROUTES.ADMIN_PAYMENTS,
                icon: "payments",
              },
              {
                title: "Review reported feedback",
                description: "Moderate reviews and resolve community reports.",
                href: ROUTES.ADMIN_REVIEWS,
                icon: "reviews",
              },
            ]}
          />
        </Panel>
      </DashboardGrid>
    </div>
  );
}

export function AdminUsersContent() {
  return (
    <Panel
      title="User directory"
      description="Learners, instructors, and elevated access grouped for faster admin actions."
    >
      <TableCard
        columns={["User", "Role", "Status", "Last active"]}
        rows={[
          ["Sara Milner", "Student", "Healthy", "2 hours ago"],
          ["Kelvin Ruiz", "Instructor", "Needs payout review", "Today"],
          ["Nadia Tran", "Admin", "Healthy", "Yesterday"],
          ["Owen Price", "Student", "Flagged for support", "Apr 14"],
        ]}
      />
    </Panel>
  );
}

export function AdminCoursesContent() {
  return (
    <Panel
      title="Course moderation"
      description="Approval status, quality checks, and live catalog health."
    >
      <TableCard
        columns={["Course", "Instructor", "Status", "Issue"]}
        rows={[
          ["Advanced Product Strategy", "Nadia Tran", "Pending", "Thumbnail update"],
          ["Creative Direction Sprint", "Amina Yusuf", "Pending", "Curriculum clarity"],
          ["AI Workflow Systems", "Kelvin Ruiz", "Live", "Healthy"],
          ["SQL for Product Teams", "Sara Milner", "Live", "Minor copy update"],
        ]}
      />
    </Panel>
  );
}

export function AdminPaymentsContent() {
  return (
    <Panel
      title="Payments and payouts"
      description="Transaction visibility and payout health for operations."
    >
      <TableCard
        columns={["Reference", "Type", "Amount", "State"]}
        rows={[
          ["TX-89322", "Learner purchase", "$129.00", "Captured"],
          ["PO-41021", "Instructor payout", "$2,763.00", "Scheduled"],
          ["RF-18842", "Refund", "$49.00", "Processed"],
          ["TX-88103", "Learner purchase", "$79.00", "Failed"],
        ]}
      />
    </Panel>
  );
}

export function AdminReviewsContent() {
  return (
    <Panel
      title="Community reviews"
      description="Moderation-ready feedback and reported content."
    >
      <QuickList
        items={[
          {
            title: "Reported review on AI Workflow Systems",
            detail: "Flagged for personal attack language in the feedback body.",
            meta: "Needs review",
            tone: "warning",
          },
          {
            title: "High praise trend on Product Discovery track",
            detail: "Positive sentiment is strongest around practical templates.",
            meta: "Signal",
            tone: "positive",
          },
          {
            title: "Refund-related complaint cluster",
            detail: "Three comments mention checkout confusion on mobile.",
            meta: "UX risk",
          },
        ]}
      />
    </Panel>
  );
}

export function AdminAnalyticsContent() {
  return (
    <div className="space-y-5">
      <MetricGrid
        items={[
          adminMetrics[0],
          adminMetrics[1],
          {
            label: "7-day retention",
            value: "61%",
            detail: "Onboarding changes are pushing better first-week returns.",
            icon: "monitoring",
          },
          {
            label: "Mobile conversion",
            value: "4.2%",
            detail: "Improved after simplifying the pricing and checkout flow.",
            icon: "phone_iphone",
          },
        ]}
      />
      <Panel
        title="Analytics narrative"
        description="Readable operational takeaways until live reporting widgets are connected."
      >
        <QuickList
          items={[
            {
              title: "Development category leads growth",
              detail: "Course launches in React and AI drove the strongest acquisition.",
              meta: "Top category",
              tone: "positive",
            },
            {
              title: "Mobile checkout friction dropped",
              detail: "Shorter payment forms improved completion on smaller devices.",
              meta: "Better UX",
              tone: "positive",
            },
            {
              title: "Moderation time still high on new submissions",
              detail: "Thumbnail and structure checks remain the main bottleneck.",
              meta: "Process gap",
              tone: "warning",
            },
          ]}
        />
      </Panel>
    </div>
  );
}

export function AdminSettingsContent() {
  return (
    <Panel
      title="Platform settings"
      description="Core operational controls grouped into a simple responsive stack."
    >
      <QuickList
        items={[
          {
            title: "Platform notification rules",
            detail: "Adjust finance, trust, and moderation alert thresholds.",
            meta: "Operations",
          },
          {
            title: "Payout and fee policy",
            detail: "Review the current revenue split and timing rules.",
            meta: "Billing",
            tone: "warning",
          },
          {
            title: "Moderation guidelines",
            detail: "Keep course and review standards aligned with enforcement.",
            meta: "Policy",
          },
        ]}
      />
    </Panel>
  );
}
