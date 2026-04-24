"use client";

import { useEffect, useMemo, useState } from "react";
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
import { courseService } from "@/services/course.service";
import { userService } from "@/services/user.service";
import { adminService } from "@/services/admin.service";
import { progressService } from "@/services/progress.service";
import { paymentService } from "@/services/payment.service";
import { reviewService } from "@/services/review.service";
import type { LearningSummary } from "@/types";

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

function useLearningSummary() {
  const [learning, setLearning] = useState<LearningSummary | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      try {
        const response = await userService.getMyLearning();
        if (mounted) {
          setLearning(response.data);
          setError(null);
        }
      } catch (err) {
        if (mounted) {
          setLearning(null);
          setError(err instanceof Error ? err.message : "Failed to load learning summary");
        }
      } finally {
        if (mounted) setIsLoading(false);
      }
    };
    void load();
    return () => {
      mounted = false;
    };
  }, []);

  return { learning, isLoading, error };
}

export function UserDashboardContent() {
  const { learning, isLoading, error } = useLearningSummary();
  const courseItems = useMemo(
    () =>
      (learning?.courses ?? []).slice(0, 3).map((item) => ({
        label: item.course.title,
        detail: item.lastLesson
          ? `Next: ${item.lastLesson.title}`
          : "No lesson activity yet",
        value: `${Math.round(item.completionPercentage)}%`,
      })),
    [learning],
  );

  const dynamicStudentMetrics: MetricItem[] = learning
    ? [
        {
          label: "Active enrollments",
          value: String(learning.totals.activeEnrollments),
          detail: "Courses you are actively progressing through.",
          icon: "menu_book",
        },
        {
          label: "Total enrollments",
          value: String(learning.totals.totalEnrollments),
          detail: "Your lifetime purchased/enrolled courses.",
          icon: "school",
        },
        {
          label: "Completed courses",
          value: String(learning.totals.completedCourses),
          detail: "Courses with 100% completion reached.",
          icon: "workspace_premium",
        },
        studentMetrics[0],
      ]
    : studentMetrics;

  return (
    <div className="space-y-5">
      <OverviewBoard
        eyebrow="Student overview"
        title="Welcome back"
        description="Your learning dashboard is now spaced like a proper workspace: clear progress, focused actions, and a faster path back into the courses that matter this week."
        metrics={dynamicStudentMetrics}
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
            items={courseItems.length > 0 ? courseItems : [
              {
                label: "No active enrollments",
                detail: "Start a course to populate your learning queue.",
                value: "0%",
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
            items={(learning?.courses ?? []).slice(0, 3).map((item) => ({
              label: item.course.title,
              detail: item.lastLesson
                ? `Continue from lesson ${item.lastLesson.orderIndex}: ${item.lastLesson.title}`
                : "Start your first lesson",
              value: `${Math.round(item.completionPercentage)}%`,
              progress: Math.round(item.completionPercentage),
            }))}
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
      {isLoading ? (
        <Panel title="Learning sync" description="Refreshing your latest enrollment data.">
          <p className="text-sm text-on-surface-variant">Loading learning summary...</p>
        </Panel>
      ) : null}
      {error ? (
        <Panel title="Learning sync issue" description="The dashboard is still usable while data sync recovers.">
          <p className="text-sm text-on-surface-variant">{error}</p>
        </Panel>
      ) : null}
    </div>
  );
}

export function UserCoursesContent() {
  const { learning, isLoading, error } = useLearningSummary();
  const rows = (learning?.courses ?? []).map((item) => [
    item.course.title,
    item.status === "ACTIVE" ? "In progress" : item.status,
    `${Math.round(item.completionPercentage)}%`,
    item.lastLesson ? `Continue ${item.lastLesson.title}` : "Start first lesson",
  ]);

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
        {isLoading ? <p className="mb-3 text-sm text-on-surface-variant">Loading courses...</p> : null}
        {error ? <p className="mb-3 text-sm text-on-surface-variant">{error}</p> : null}
        <TableCard
          columns={["Course", "Status", "Progress", "Next step"]}
          rows={rows.length > 0 ? rows : [["No enrollments yet", "-", "-", "Browse catalog"]]}
        />
      </Panel>
    </div>
  );
}

export function UserProgressContent() {
  const { learning, error: learningError } = useLearningSummary();
  const [lessonSignals, setLessonSignals] = useState<Record<string, number>>({});

  useEffect(() => {
    const load = async () => {
      try {
        const response = await progressService.getMine();
        const aggregate: Record<string, number> = {};
        response.data.forEach((entry) => {
          const key = entry.lesson.course.title;
          aggregate[key] = (aggregate[key] ?? 0) + (entry.isCompleted ? 1 : 0);
        });
        setLessonSignals(aggregate);
      } catch {
        setLessonSignals({});
      }
    };
    void load();
  }, []);

  const progressItems = (learning?.courses ?? []).map((item) => ({
    label: item.course.title,
    detail: item.lastLesson
      ? `Last lesson: ${item.lastLesson.title} · Completed lessons: ${lessonSignals[item.course.title] ?? 0}`
      : "No lesson activity recorded yet.",
    value: `${Math.round(item.completionPercentage)}%`,
    progress: Math.round(item.completionPercentage),
  }));

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
        {learningError ? <p className="mb-3 text-sm text-on-surface-variant">{learningError}</p> : null}
        <ProgressList
          items={
            progressItems.length > 0
              ? progressItems
              : [
                  {
                    label: "No progress yet",
                    detail: "Enroll in a course to start tracking progress.",
                    value: "0%",
                    progress: 0,
                  },
                ]
          }
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
  const [paymentsState, setPaymentsState] = useState("Payment history endpoint is not available yet.");

  useEffect(() => {
    const load = async () => {
      try {
        // Checkout endpoint exists; payment-history endpoint is intentionally missing for now.
        await paymentService.createCheckout("preview-only");
      } catch {
        setPaymentsState("Live payment history is pending backend support. Checkout/verify endpoints are integrated.");
      }
    };
    void load();
  }, []);

  return (
    <div className="space-y-5">
      <Panel
        title="Orders and invoices"
        description="Purchases, billing records, and receipt retrieval in one place."
      >
        <p className="mb-3 text-sm text-on-surface-variant">{paymentsState}</p>
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
  const [profileName, setProfileName] = useState("");
  const [profilePhone, setProfilePhone] = useState("");
  const [saveState, setSaveState] = useState("");

  useEffect(() => {
    const load = async () => {
      try {
        const response = await userService.getMe();
        setProfileName(response.data.name ?? "");
        setProfilePhone(response.data.phone ?? "");
      } catch (err) {
        setSaveState(err instanceof Error ? err.message : "Failed to load profile");
      }
    };
    void load();
  }, []);

  const handleSave = async () => {
    try {
      const response = await userService.updateMe({
        name: profileName,
        phone: profilePhone,
      });
      setSaveState(`Profile saved for ${response.data.name}`);
    } catch (err) {
      setSaveState(err instanceof Error ? err.message : "Failed to update profile");
    }
  };

  return (
    <div className="space-y-5">
      <Panel
        title="Account settings"
        description="A mobile-friendly overview of the controls learners look for most."
      >
        <div className="mb-4 grid gap-3 md:grid-cols-2">
          <input
            value={profileName}
            onChange={(e) => setProfileName(e.target.value)}
            placeholder="Full name"
            className="w-full rounded-lg border border-outline-variant/30 bg-white px-3 py-2"
          />
          <input
            value={profilePhone}
            onChange={(e) => setProfilePhone(e.target.value)}
            placeholder="Phone number"
            className="w-full rounded-lg border border-outline-variant/30 bg-white px-3 py-2"
          />
        </div>
        <button
          type="button"
          onClick={handleSave}
          className="mb-4 rounded-lg bg-primary px-4 py-2 text-on-primary font-semibold"
        >
          Save profile
        </button>
        {saveState ? <p className="mb-4 text-sm text-on-surface-variant">{saveState}</p> : null}
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
  const [courses, setCourses] = useState<Array<{ id: string; title: string; status: string; enrollmentCount: number; price: number }>>([]);
  const [actionState, setActionState] = useState("");

  useEffect(() => {
    const load = async () => {
      try {
        const response = await courseService.getMine({ limit: 20, sort: "newest" });
        setCourses(
          response.data.map((course) => ({
            id: course.id,
            title: course.title,
            status: course.status,
            enrollmentCount: course.enrollmentCount,
            price: course.price,
          })),
        );
      } catch {
        setCourses([]);
      }
    };
    void load();
  }, []);

  const handleSubmit = async (id: string) => {
    try {
      const response = await courseService.submitForReview(id);
      setActionState(`Submitted "${response.data.title}" for review.`);
    } catch (err) {
      setActionState(err instanceof Error ? err.message : "Failed to submit course");
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await courseService.delete(id);
      setCourses((prev) => prev.filter((course) => course.id !== id));
      setActionState("Course deleted.");
    } catch (err) {
      setActionState(err instanceof Error ? err.message : "Failed to delete course");
    }
  };

  const handleQuickPriceUpdate = async (id: string, currentPrice: number) => {
    try {
      const response = await courseService.update(id, { price: currentPrice + 1 });
      setCourses((prev) =>
        prev.map((course) =>
          course.id === id ? { ...course, price: response.data.price } : course,
        ),
      );
      setActionState(`Updated "${response.data.title}" price to $${response.data.price.toFixed(2)}.`);
    } catch (err) {
      setActionState(err instanceof Error ? err.message : "Failed to update course");
    }
  };

  return (
    <Panel
      title="Course inventory"
      description="Published, draft, and scheduled courses shown in a dense but readable table."
    >
      {courses.length > 0 ? (
        <div className="mb-4 flex flex-wrap gap-2">
          {courses.slice(0, 3).map((course) => (
            <div key={course.id} className="rounded-lg border border-outline-variant/20 px-3 py-2 text-xs">
              <p className="font-semibold text-primary">{course.title}</p>
              <div className="mt-2 flex gap-2">
                <button
                  type="button"
                  onClick={() => handleSubmit(course.id)}
                  className="rounded bg-primary px-2 py-1 text-on-primary"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={() => handleQuickPriceUpdate(course.id, course.price)}
                  className="rounded border border-outline-variant/30 px-2 py-1"
                >
                  +$1 Price
                </button>
                <button
                  type="button"
                  onClick={() => handleDelete(course.id)}
                  className="rounded border border-outline-variant/30 px-2 py-1"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : null}
      {actionState ? <p className="mb-3 text-sm text-on-surface-variant">{actionState}</p> : null}
      <TableCard
        columns={["Course", "Visibility", "Students", "Revenue"]}
        rows={
          courses.length > 0
            ? courses.map((course) => [
                course.title,
                course.status,
                String(course.enrollmentCount),
                `$${(course.enrollmentCount * course.price).toFixed(2)}`,
              ])
            : [["No courses yet", "-", "-", "-"]]
        }
      />
    </Panel>
  );
}

export function InstructorCreateCourseContent() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("0");
  const [status, setStatus] = useState<string>("");

  const handleCreate = async () => {
    try {
      const created = await courseService.create({
        title,
        description,
        shortDescription: description.slice(0, 120),
        price: Number(price),
      });
      setStatus(`Created: ${created.data.title}`);
      setTitle("");
      setDescription("");
      setPrice("0");
    } catch (err) {
      setStatus(err instanceof Error ? err.message : "Failed to create course");
    }
  };

  return (
    <div className="space-y-5">
      <DashboardHero
        eyebrow="Course builder"
        title="Launch-ready authoring steps."
        description="This page is structured around the actual publishing flow: concept, curriculum, assets, pricing, and launch checks. The layout is compressed for tablets without losing hierarchy."
      />
      <Panel
        title="Create course"
        description="Direct API-backed course creation for instructor flow."
      >
        <div className="space-y-4">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Course title"
            className="w-full rounded-lg border border-outline-variant/30 bg-white px-3 py-2"
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Course description (min 20 chars)"
            className="w-full rounded-lg border border-outline-variant/30 bg-white px-3 py-2 min-h-28"
          />
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Price"
            type="number"
            min={0}
            className="w-full rounded-lg border border-outline-variant/30 bg-white px-3 py-2"
          />
          <button
            type="button"
            onClick={handleCreate}
            className="rounded-lg bg-primary px-4 py-2 text-on-primary font-semibold"
          >
            Create course
          </button>
          {status ? <p className="text-sm text-on-surface-variant">{status}</p> : null}
        </div>
      </Panel>
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
  const [items, setItems] = useState<Array<{ title: string; detail: string; meta: string; tone?: "default" | "positive" | "warning" }>>([]);

  useEffect(() => {
    const load = async () => {
      try {
        const mine = await courseService.getMine({ limit: 5, sort: "newest" });
        const reviewLists = await Promise.all(
          mine.data.slice(0, 3).map((course) => reviewService.getByCourse(course.id)),
        );
        const merged = reviewLists
          .flatMap((response, index) =>
            response.data.map((review) => ({
              title: `"${review.comment ?? "No comment"}"`,
              detail: `${mine.data[index]?.title ?? "Course"} · from ${review.user.name}`,
              meta: `${review.rating}/5`,
              tone: review.rating >= 4 ? "positive" as const : "warning" as const,
            })),
          )
          .slice(0, 6);
        setItems(merged);
      } catch {
        setItems([]);
      }
    };
    void load();
  }, []);

  return (
    <Panel
      title="Recent reviews"
      description="Feedback grouped for fast response and course refinement."
    >
      <QuickList
        items={items.length > 0 ? items : [{ title: "No live reviews yet", detail: "Publish courses and collect learner feedback.", meta: "Empty" }]}
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
  const [rows, setRows] = useState<string[][]>([]);
  useEffect(() => {
    const load = async () => {
      try {
        const response = await adminService.getUsers();
        setRows(
          response.data.map((user) => [
            user.name,
            user.role,
            user.isBlocked ? "Blocked" : "Active",
            "Recently active",
          ]),
        );
      } catch {
        setRows([]);
      }
    };
    void load();
  }, []);

  return (
    <Panel
      title="User directory"
      description="Learners, instructors, and elevated access grouped for faster admin actions."
    >
      <TableCard
        columns={["User", "Role", "Status", "Last active"]}
        rows={rows.length > 0 ? rows : [["No users found", "-", "-", "-"]]}
      />
    </Panel>
  );
}

export function AdminCoursesContent() {
  const [rows, setRows] = useState<string[][]>([]);
  useEffect(() => {
    const load = async () => {
      try {
        const response = await adminService.getCourses();
        setRows(
          response.data.map((course) => [
            course.title,
            course.instructor.name,
            course.status,
            `${course.enrollmentCount} enrollments`,
          ]),
        );
      } catch {
        setRows([]);
      }
    };
    void load();
  }, []);

  return (
    <Panel
      title="Course moderation"
      description="Approval status, quality checks, and live catalog health."
    >
      <p className="mb-3 text-sm text-on-surface-variant">
        Moderation actions (approve/reject) are not exposed by backend yet; this page is read-only for now.
      </p>
      <TableCard
        columns={["Course", "Instructor", "Status", "Issue"]}
        rows={rows.length > 0 ? rows : [["No courses found", "-", "-", "-"]]}
      />
    </Panel>
  );
}

export function AdminPaymentsContent() {
  const [rows, setRows] = useState<string[][]>([]);
  useEffect(() => {
    const load = async () => {
      try {
        const response = await adminService.getPayments();
        setRows(
          response.data.map((payment) => [
            payment.id.slice(0, 8),
            `${payment.user.name} -> ${payment.course.title}`,
            `${payment.amount.toFixed(2)} ${payment.currency.toUpperCase()}`,
            payment.status,
          ]),
        );
      } catch {
        setRows([]);
      }
    };
    void load();
  }, []);

  return (
    <Panel
      title="Payments and payouts"
      description="Transaction visibility and payout health for operations."
    >
      <TableCard
        columns={["Reference", "Type", "Amount", "State"]}
        rows={rows.length > 0 ? rows : [["No payments found", "-", "-", "-"]]}
      />
    </Panel>
  );
}

export function AdminReviewsContent() {
  const [items, setItems] = useState<Array<{ title: string; detail: string; meta: string; tone?: "default" | "positive" | "warning" }>>([]);
  useEffect(() => {
    const load = async () => {
      try {
        const response = await adminService.getReviews();
        setItems(
          response.data.map((review) => ({
            title: `${review.course.title} review by ${review.user.name}`,
            detail: review.comment ?? "No comment provided.",
            meta: `${review.rating}/5`,
            tone: review.rating >= 4 ? "positive" : "warning",
          })),
        );
      } catch {
        setItems([]);
      }
    };
    void load();
  }, []);

  return (
    <Panel
      title="Community reviews"
      description="Moderation-ready feedback and reported content."
    >
      <QuickList
        items={items.length > 0 ? items : [{ title: "No reviews", detail: "No review records returned.", meta: "Empty" }]}
      />
    </Panel>
  );
}

export function AdminAnalyticsContent() {
  const [liveMetrics, setLiveMetrics] = useState<MetricItem[] | null>(null);
  useEffect(() => {
    const load = async () => {
      try {
        const response = await adminService.getAnalytics();
        setLiveMetrics([
          {
            label: "Platform members",
            value: `${response.data.totalUsers}`,
            detail: "Total users across all roles.",
            icon: "group",
          },
          {
            label: "Live courses",
            value: `${response.data.totalCourses}`,
            detail: "Courses currently active in the platform.",
            icon: "school",
          },
          {
            label: "Gross revenue",
            value: `$${response.data.grossRevenue.toFixed(0)}`,
            detail: "Aggregated payment volume.",
            icon: "bar_chart",
          },
          {
            label: "Total enrollments",
            value: `${response.data.totalEnrollments}`,
            detail: "Enrollment records created so far.",
            icon: "monitoring",
          },
        ]);
      } catch {
        setLiveMetrics(null);
      }
    };
    void load();
  }, []);

  return (
    <div className="space-y-5">
      <MetricGrid
        items={liveMetrics ?? [
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
